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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { password, confirmPassword } = user;

    if (password !== confirmPassword) {
      toast.error("Password & Confirm Password do not match!");
      setIsLoading(false);
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
      setIsLoading(false);
      return;
    }

    if (data) {
      toast.success("User created successfully!");
      setTimeout(() => {
        router.push("/");
      }, 800);
    }
  };

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
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#0f0f1a] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-600/20 rounded-full blur-[120px] pointer-events-none" />

      <Card className="w-full max-w-md bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/10 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-purple-600/20 to-green-600/20 border border-purple-500/20 mb-4">
            <svg
              className="w-7 h-7 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join us and find your perfect pet companion
          </p>
        </div>

        <Form className="px-8 pb-6 flex flex-col gap-5" onSubmit={onSubmit}>
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
              Full Name
            </Label>
            <Input
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
            />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Photo URL */}
          <TextField isRequired name="image" type="text">
            <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
              Photo URL
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
            />
            <FieldError className="text-red-400 text-xs mt-1" />
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
            <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
              Email Address
            </Label>
            <Input
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
            />
            <FieldError className="text-red-400 text-xs mt-1" />
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
            <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
              Password
            </Label>
            <Input
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
            />
            <Description className="text-xs text-gray-500 mt-1">
              Min 6 chars, 1 uppercase, 1 lowercase
            </Description>
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Confirm Password */}
          <TextField isRequired name="confirmPassword" type="password">
            <Label className="text-sm font-medium text-gray-300 mb-1.5 block">
              Confirm Password
            </Label>
            <Input
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
            />
            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            isDisabled={isLoading}
            className="w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-green-600 text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Check className="w-5 h-5" />
            )}
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </Form>

        {/* OR Separator */}
        <div className="px-8 flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Google Login */}
        <div className="px-8 pb-8">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full py-3 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-purple-500/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FaGoogle className="text-lg text-red-400" />
            Sign in with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}