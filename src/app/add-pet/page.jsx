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
} from "@heroui/react";
import React from "react";

const addPet = () => {

     const onSubmit = async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const pet = Object.fromEntries(formData.entries());

          console.log(pet);

          const res= await fetch("http://localhost:5000/pets", {
               method: 'POST',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify(pet)
          });
          
          const data = await res.json();
          console.log(data);
          
     }




  return (
    <div className="pt-12 sm:pt-30 mt-10 bg-white">
      <form onSubmit={onSubmit} className="p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* pet Name */}
          <div className="md:col-span-2">
            <TextField name="petName" isRequired>
              <Label>Pet Name</Label>
              <Input placeholder="Bali Paradise" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="Breed" isRequired>
            <Label>Breed</Label>
            <Input placeholder="Breed" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>Category</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
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
                  <ListBox.Item id="Horse" textValue="AdvenHorseture">
                    Horse
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="panda" textValue="panda">
                    panda
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

          {/* Price */}
          <TextField name="Fee" type="number" isRequired>
            <Label>Adoption Fee (BDT)</Label>
            <Input type="number" placeholder="1299" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="Age" isRequired>
            <Label>Age</Label>
            <Input placeholder="" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Gender */}
          <div>
            <Select
              name="gender"
              isRequired
              className="w-full"
              placeholder="Select Gender"
            >
              <Label>Gender</Label>

              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
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
              <Label>Vaccination Status</Label>

              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                    Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">
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
            <Label>Health Status</Label>
            <Input
              placeholder="Healthy / Injured / Sick"
              className="rounded-2xl"
            />
            <FieldError />
          </TextField>

          {/* Location */}
          <TextField name="location" isRequired>
            <Label>Location</Label>
            <Input placeholder="Rajshahi, Bangladesh" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Owner Email */}
          <TextField name="ownerEmail" isRequired>
            <Label>Owner Email</Label>
            <Input
               //    value={user?.email}
              isReadOnly
              className="rounded-2xl bg-gray-100"
            />
            <FieldError />
          </TextField>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default addPet;
