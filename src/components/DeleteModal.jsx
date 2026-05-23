"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function DeleteModal({ data }) {
  const { _id, petName } = data;
  const router = useRouter();
     
  const handleDelete = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await res.json();
      router.push("/pets");

      if (res.ok) {
        toast.success("Pet Deleted Successfully!");
      } else {
        toast.error("Failed to Delete pet!");
      }
    } catch (error) {
      toast.error("Server Error!");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Delete {petName}</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {petName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{petName}</strong> {""}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="text-gray-500">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete {petName}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
