"use client";

import {
  Button,
  FieldError,
  Input,
  Select,
  Label,
  ListBox,
  TextArea,
  TextField,
  Card,
} from "@heroui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaw } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AddPet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());
    pet.userId = user?.id;
    pet.ownerEmail = user?.email;

    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(pet),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Pet Added Successfully!");
        router.push("/deshboard/my-listings");
        e.target.reset();
      } else {
        toast.error(data.message || "Failed to add pet!");
      }
    } catch (error) {
      toast.error("Server Error!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-[#0f0f1a] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20 mb-4">
            <FaPaw className="text-2xl text-purple-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent">
            Add New Pet
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Fill in the details to list a pet for adoption
          </p>
        </div>

        <Card className="bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/10 rounded-2xl overflow-hidden">
          <form onSubmit={onSubmit} className="p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pet Name */}
              <div className="md:col-span-2">
                <TextField name="petName" isRequired>
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Pet Name
                  </Label>
                  <Input
                    placeholder="Bali Paradise"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  />
                  <FieldError className="text-red-400 text-xs mt-1" />
                </TextField>
              </div>

              {/* Breed */}
              <TextField name="Breed" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Breed
                </Label>
                <Input
                  placeholder="Golden Retriever"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Category */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Category
                  </Label>
                  <Select.Trigger className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-[#1a1a2e] border border-white/10 rounded-xl shadow-xl">
                    <ListBox className="text-gray-300">
                      <ListBox.Item id="Dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Horse" textValue="Horse">
                        Horse
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Panda" textValue="Panda">
                        Panda
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Rabbit" textValue="Rabbit">
                        Rabbit
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Adoption Fee */}
              <TextField name="Fee" type="number" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Adoption Fee (BDT)
                </Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Age */}
              <TextField name="Age" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Age
                </Label>
                <Input
                  placeholder="2 years"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Gender */}
              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select Gender"
                >
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Gender
                  </Label>
                  <Select.Trigger className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-[#1a1a2e] border border-white/10 rounded-xl shadow-xl">
                    <ListBox className="text-gray-300">
                      <ListBox.Item id="Male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Vaccination Status */}
              <div>
                <Select
                  name="vaccinationStatus"
                  isRequired
                  className="w-full"
                  placeholder="Vaccination Status"
                >
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Vaccination Status
                  </Label>
                  <Select.Trigger className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-[#1a1a2e] border border-white/10 rounded-xl shadow-xl">
                    <ListBox className="text-gray-300">
                      <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                        Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Not Vaccinated"
                        textValue="Not Vaccinated"
                      >
                        Not Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item
                        id="Partially Vaccinated"
                        textValue="Partially Vaccinated"
                      >
                        Partially Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Health Status */}
              <TextField name="healthStatus" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Health Status
                </Label>
                <Input
                  placeholder="Healthy / Injured / Sick"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Location */}
              <TextField name="location" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Location
                </Label>
                <Input
                  placeholder="Rajshahi, Bangladesh"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Owner Email */}
              <TextField name="ownerEmail" isRequired>
                <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                  Owner Email
                </Label>
                <Input
                  value={session?.user?.email ?? "Loading..."}
                  readOnly
                  placeholder="Owner Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 placeholder:text-gray-600 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none cursor-not-allowed"
                />
                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/pet-image.jpg"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  />
                  <FieldError className="text-red-400 text-xs mt-1" />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
                    Description
                  </Label>
                  <TextArea
                    placeholder="Describe the pet's personality, habits, and why it needs a new home..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none min-h-30 resize-y"
                  />
                  <FieldError className="text-red-400 text-xs mt-1" />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                isDisabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-purple-600 to-green-600 text-white font-semibold text-base hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <FaPaw className="text-lg" />
                )}
                {isLoading ? "Adding Pet..." : "Add Pet"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPet;
