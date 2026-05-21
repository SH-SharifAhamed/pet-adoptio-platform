"use client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { Check } from "@gravity-ui/icons";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";


export default function SignUpPage() {
  

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { password, confirmPassword } = user;

    // validation first
    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
      return;
    }

    if (data) {
      toast.success("User created successfully!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    toast.loading("Redirecting to Google...");
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 my-25">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        {/* Name */}
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Photo URL */}
        <TextField isRequired name="image" type="text">
          <Label>Photo URL</Label>
          <Input placeholder="Enter photo URL" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Invalid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Must contain 1 uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Must contain 1 lowercase letter";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter password" />
          <Description>Min 6 chars, 1 uppercase, 1 lowercase</Description>
          <FieldError />
        </TextField>

        {/* Confirm Password */}
        <TextField isRequired name="confirmPassword" type="password">
          <Label>Confirm Password</Label>
          <Input placeholder="Confirm password" />
          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button type="submit" className="bg-blue-600 text-white">
            <Check />
            Sign Up
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      {/* Login link */}
      <p className="text-center text-gray-700 mt-4">
        Already have an account?{" "}
        <a href="/signin" className="text-blue-600 font-medium underline">
          Sign In
        </a>
      </p>

      {/* Google login */}
      <div className="flex items-center gap-3 my-6">
        <hr className="flex-1" />
        <span className="text-xs text-gray-700">OR</span>
        <hr className="flex-1" />
      </div>

      <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
        <FaGoogle /> Sign in with Google
      </Button>
    </Card>
  );
}
