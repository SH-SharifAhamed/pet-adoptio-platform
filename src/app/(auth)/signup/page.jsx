"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  User,
  Mail,
  ImageIcon,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { signUp } from "@/lib/auth-client";

export default function RegisterForm() {
  const router = useRouter();

  const handeleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const registerData = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      ...registerData,
    });

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    if (!error) {
      toast.success("User Created Successfully!");
      router.push("/");
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    photo: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const upperCase = /[A-Z]/.test(password);
    const lowerCase = /[a-z]/.test(password);
    return {
      minLength,
      upperCase,
      lowerCase,
      isValid: minLength && upperCase && lowerCase,
    };
  };

  const passwordChecks = validatePassword(form.password);
  const passwordsMatch =
    form.password === form.confirmPassword && form.confirmPassword !== "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const getPasswordStrength = () => {
    const { minLength, upperCase, lowerCase } = passwordChecks;
    const score = [minLength, upperCase, lowerCase].filter(Boolean).length;
    if (score === 0) return { label: "", color: "bg-gray-200", width: "0%" };
    if (score === 1)
      return { label: "Weak", color: "bg-red-500", width: "33%" };
    if (score === 2)
      return { label: "Fair", color: "bg-yellow-500", width: "66%" };
    return { label: "Strong", color: "bg-green-500", width: "100%" };
  };

  const strength = getPasswordStrength();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      photo: true,
      password: true,
      confirmPassword: true,
    });
  };

  const inputClasses = (error, value) =>
    `w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 ${
      error && touched[value]
        ? "border-red-300 focus:border-red-500 bg-red-50"
        : value && touched[value]
          ? "border-green-300 focus:border-green-500 bg-green-50"
          : "border-gray-200 focus:border-blue-500 bg-gray-50 focus:bg-white"
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 my-25">
      <div className="w-full max-w-md">
       
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
         
          <div className="bg-linear-to-r from-green-600 to-indigo-600 p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Create Account
            </h1>
            <p className="text-blue-100 text-sm">Sign in to your account!</p>
          </div>

          {/* Form */}
          <form onSubmit={handeleRegister} className="p-8 space-y-5">
            
            <div className="relative text-slate-700">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses(!form.name && touched.name, "name")}
              />
              {form.name && touched.name && (
                <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
              )}
            </div>

            {/* Email */}
            <div className="relative text-slate-700">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses(
                  !isEmailValid && touched.email && form.email !== "",
                  "email",
                )}
              />
              {isEmailValid && touched.email && (
                <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
              )}
            </div>

            {/* Photo URL */}
            <div className="relative text-slate-700">
              <ImageIcon className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="url"
                name="photo"
                placeholder="Profile Photo URL"
                value={form.photo}
                onChange={handleChange}
                onBlur={handleBlur}
                className={inputClasses(!form.photo && touched.photo, "photo")}
              />
              {form.photo && touched.photo && (
                <CheckCircle2 className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
              )}
            </div>

            {/* Password */}
            <div className="relative text-slate-700">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClasses(
                  !passwordChecks.isValid &&
                    touched.password &&
                    form.password !== "",
                  "password",
                )} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Password Strength */}
            {form.password && (
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-700">Password strength</span>
                  <span
                    className={`font-medium ${
                      strength.label === "Strong"
                        ? "text-green-600"
                        : strength.label === "Fair"
                          ? "text-yellow-600"
                          : "text-red-600"
                    }`}
                  >
                    {strength.label}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${strength.color} transition-all duration-500 rounded-full`}
                    style={{ width: strength.width }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div
                    className={`flex items-center gap-1 ${passwordChecks.minLength ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordChecks.minLength ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    6+ chars
                  </div>
                  <div
                    className={`flex items-center gap-1 ${passwordChecks.upperCase ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordChecks.upperCase ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    Uppercase
                  </div>
                  <div
                    className={`flex items-center gap-1 ${passwordChecks.lowerCase ? "text-green-600" : "text-gray-400"}`}
                  >
                    {passwordChecks.lowerCase ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <XCircle className="w-3 h-3" />
                    )}
                    Lowercase
                  </div>
                </div>
              </div>
            )}

            {/* Confirm Password */}
            <div className="relative text-slate-700">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClasses(
                  !passwordsMatch &&
                    touched.confirmPassword &&
                    form.confirmPassword !== "",
                  "confirmPassword",
                )} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
              {passwordsMatch && touched.confirmPassword && (
                <CheckCircle2 className="absolute right-10 top-3.5 w-5 h-5 text-green-500" />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-green-600 to-indigo-500 hover:from-blue-500 hover:to-green-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Sign up
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Login Link */}
            <div className="w-full text-center pt-2">
              <p className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/signin")}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer border-2 rounded-2xl text-blue-700 font-bold "
                >
                  Sign in
                </button>
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 my-6">
                <hr className="flex-1 border-gray-200" />
                <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                  OR
                </span>
                <hr className="flex-1 border-gray-200" />
              </div>
              <button
               //   onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              >
                <Image
                  src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
                  alt="google"
                  width={5}
                  height={5}
                  className="w-5 h-5"
                />
                <span className="font-medium text-stone-700">
                  Continue with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
