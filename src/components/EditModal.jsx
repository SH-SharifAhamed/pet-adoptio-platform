"use client";

// import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { BiEdit, BiEditAlt } from "react-icons/bi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function EditModal({ data }) {
  const {
    _id,
    petName,
    description,
    Breed,
    category,
    vaccinationStatus,
    imageUrl,
    Fee,
    Age,
    gender,
    healthStatus,
    location,
    ownerEmail,
  } = data;
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const pet = Object.fromEntries(formData.entries());

    console.log(pet);

    try {
      const res = await fetch(`process.env.NEXT_PUBLIC_API_URL/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(pet),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success("Pet Updated Successfully!");
      } else {
        toast.error("Failed to Update pet!");
      }
    } catch (error) {
      toast.error("Server Error!");
    }
  };

  return (
    <Modal>
      <Button className="inline-flex rounded-full items-center gap-2 px-4 sm:px-5 py-2 bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300">
        <BiEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEditAlt className="text-2xl" />
              </Modal.Icon>
              <Modal.Heading className="font-semibold">Edit Pet</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="p-5 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* pet Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={petName}
                        name="petName"
                        isRequired
                      >
                        <Label>Pet Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    
                    <TextField defaultValue={Breed} name="Breed" isRequired>
                      <Label>Breed</Label>
                      <Input placeholder="Breed" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    
                    <div>
                      <Select
                        defaultValue={category}
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
                          <ListBox className="text-stone-700">
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

                    {/* Adoption Fee  */}
                    <TextField
                      defaultValue={Fee}
                      name="Fee"
                      type="number"
                      isRequired
                    >
                      <Label>Adoption Fee (BDT)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Age */}
                    <TextField defaultValue={Age} name="Age" isRequired>
                      <Label>Age</Label>
                      <Input placeholder="" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Gender */}
                    <div>
                      <Select
                        defaultValue={gender}
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
                          <ListBox className="text-stone-700">
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
                        defaultValue={vaccinationStatus}
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
                          <ListBox className="text-stone-700">
                            <ListBox.Item
                              id="Vaccinated"
                              textValue="Vaccinated"
                            >
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
                    <TextField
                      defaultValue={healthStatus}
                      name="healthStatus"
                      isRequired
                    >
                      <Label>Health Status</Label>
                      <Input
                        placeholder="Healthy / Injured / Sick"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>
                      <Input
                        placeholder="Rajshahi, Bangladesh"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Owner Email */}
                    <TextField
                      defaultValue={ownerEmail}
                      name="ownerEmail"
                      isRequired
                    >
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
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the pet..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Buttons */}

                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                      className="hover:text-red-500 w-full rounded-3xl inline-flex items-center gap-2 px-4 sm:px-5 py-2"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="outline"
                      className="w-full rounded-3xl inline-flex items-center gap-2 px-4 sm:px-5 py-2  bg-linear-to-r from-blue-500 to-green-600 text-white text-sm sm:text-base font-medium hover:from-green-600 hover:to-blue-500 transition-all duration-300"
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
