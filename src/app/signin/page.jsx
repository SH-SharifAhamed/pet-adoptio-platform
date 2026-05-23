"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
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
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    console.log({ data, error });

    if (error) {
      toast.error(error.message || "Login failed!");
      setIsLoading(false);
      return;
    }

    toast.success("Login successful!");

    setTimeout(() => {
      router.push("/");
    }, 800);
  };

  // login with google
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-white via-purple-200 to-green-200 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue your pet adoption journey
          </p>
        </div>

        <Form className="px-8 pb-6 flex flex-col gap-5" onSubmit={onSubmit}>
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
          <TextField isRequired name="password" type="password">
            <div className="flex items-center justify-between mb-1.5">
              <Label className="text-sm font-medium text-gray-300">
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              placeholder="Enter your password"
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
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-green-400 font-semibold hover:text-green-300 transition-colors"
            >
              Create Account
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