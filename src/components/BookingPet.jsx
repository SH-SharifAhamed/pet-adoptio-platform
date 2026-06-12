"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Calendar,
  Card,
  DateField,
  Description,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { MdPets } from "react-icons/md";
import { TbCoinTaka } from "react-icons/tb";
import { toast } from "react-toastify";

const BookingPet = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [date, setDate] = useState(new Date());

  const { Fee, _id, petName, imageUrl, petId } = data;

  const handleAdoption = async () => {
    const adoptData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      date: new Date(date),
      petName,
      imageUrl,
      Fee,
      status: "Pending",
      petId: _id,
    };

    const {data:tokenData} = await authClient.token();

    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(adoptData),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Adoption Request Sent Successfully!");
      e.target.reset();
    } else {
      toast.error(data.message || "Failed to add pet!");
    }
  };

  return (
    <Card className="p-4 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="flex items-center gap-3 ">
        <div className="p-2.5 rounded-xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20">
          <MdPets className="text-2xl text-purple-400" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Pets adoption From
        </h1>
      </div>

      <div className="flex items-center justify-center w-40 gap-2 bg-emerald-500/15 backdrop-blur-md border border-emerald-500/25 text-emerald-500 px-5 py-2 rounded-full text-3xl font-bold shadow-lg">
        <TbCoinTaka size={50} />
        {Fee}
      </div>

      <div className="flex items-center gap-2">
        <DateField
          onChange={setDate}
          className="w-[256px] flex justify-between"
          name="date"
        >
          <Label className="text-gray-200 font-bold">Pickup Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
            <DateField.Suffix>
              <Calendar className="size-4 text-muted" />
            </DateField.Suffix>
          </DateField.Group>
        </DateField>
      </div>

      <div>
        <TextField className="w-full max-w-64" name="message">
          <Label className="text-gray-200 font-bold">Message</Label>
          <TextArea placeholder="Write your message here..." rows={4} />
          <Description>Maximum 500 characters</Description>
        </TextField>
      </div>

      <Button onClick={handleAdoption}>Adopt Now</Button>
    </Card>
  );
};

export default BookingPet;
