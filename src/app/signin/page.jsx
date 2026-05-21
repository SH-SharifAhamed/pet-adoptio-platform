"use client";
import { authClient } from "@/lib/auth-client";
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
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export default function SignInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    console.log({data, error});
    

    if (error) {
      toast.error(error.message || "Login failed!");
      return;
    }

    toast.success("Login successful!");

    // ✅ redirect after success
    setTimeout(() => {
      router.push("/"); // or "/dashboard"
    }, 800);
  };

  // Google login
  const handleGoogleSignIn = async () => {
    const loadingToast = toast.loading("Redirecting to Google...");

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      toast.dismiss(loadingToast);
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Google login failed!");
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 my-25">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <FieldError />
        </TextField>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            type="submit"
            className="bg-linear-to-r from-blue-500 to-purple-600 text-white"
          >
            <Check />
            Log In
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>

        {/* Register link */}
        <div className="text-center">
          Don t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium underline">
            Sign Up
          </Link>
        </div>
      </Form>

      {/* OR separator */}
      <div className="flex items-center gap-3 my-6">
        <hr className="flex-1 border-gray-200" />
        <span className="text-xs text-gray-500">OR</span>
        <hr className="flex-1 border-gray-200" />
      </div>

      {/* Google login */}
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full bg-linear-to-r from-blue-500 to-purple-600 text-white"
      >
        <FaGoogle />
        Sign in with Google
      </Button>
    </Card>
  );
}
