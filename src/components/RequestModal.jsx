"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RequestModal = ({ petId, petName }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const loadRequests = async () => {
    try {
      setLoading(true);
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pets/${petId}/requests`,
        {
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      const data = await res.json();
      if (res.ok) {
        setRequests(data || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = async (requestId, status) => {
    try {
      setUpdatingId(requestId);
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopters/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify({ status }),
        },
      );

      if (res.ok) {
        toast.success(`Request ${status}`);
        await loadRequests();
      } else {
        toast.error("Unable to update request");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <Modal>
      <Button className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm font-semibold text-blue-300 hover:bg-blue-500/20">
        Requests
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Requests for {petName}</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="space-y-3 p-4">
              {loading ? (
                <div className="flex justify-center py-6">
                  <Spinner color="default" />
                </div>
              ) : requests.length === 0 ? (
                <p className="text-gray-500">No requests yet.</p>
              ) : (
                requests.map((request) => (
                  <div
                    key={request._id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          {request.userName}
                        </p>
                        <p className="text-sm text-gray-400">
                          {request.userEmail ||
                            request.userEmailAddress ||
                            request.email}
                        </p>
                        <p className="text-sm text-gray-400">
                          Pickup:{" "}
                          {request.date
                            ? new Date(request.date).toLocaleDateString()
                            : "N/A"}
                        </p>
                        <p className="text-sm text-gray-400">
                          Status: {request.status || "Pending"}
                        </p>
                      </div>
                      {request.status && request.status !== "Pending" ? null : (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-green-600 text-white"
                            isDisabled={updatingId === request._id}
                            onPress={() =>
                              updateRequest(request._id, "Approved")
                            }
                          >
                            {updatingId === request._id ? (
                              <Spinner size="sm" />
                            ) : (
                              "Approve"
                            )}
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-600 text-white"
                            isDisabled={updatingId === request._id}
                            onPress={() =>
                              updateRequest(request._id, "Rejected")
                            }
                          >
                            {updatingId === request._id ? (
                              <Spinner size="sm" />
                            ) : (
                              "Reject"
                            )}
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button
                onPress={() => loadRequests()}
                className="bg-white/10 text-white"
              >
                Refresh
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default RequestModal;
