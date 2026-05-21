"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Newsletter handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Pets", href: "/pets" },
    { name: "About Us", href: "/about" },
    { name: "Success Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "#",
      color: "hover:bg-blue-600 hover:shadow-blue-600/40",
      label: "Facebook",
    },
    {
      icon: BsInstagram,
      href: "#",
      color: "hover:bg-pink-600 hover:shadow-pink-600/40",
      label: "Instagram",
    },
    {
      icon: BsTwitter,
      href: "#",
      color: "hover:bg-sky-500 hover:shadow-sky-500/40",
      label: "Twitter",
    },
    {
      icon: LiaLinkedin,
      href: "#",
      color: "hover:bg-blue-700 hover:shadow-blue-700/40",
      label: "LinkedIn",
    },
  ];

  return (
    <div>
      <footer className="relative overflow-hidden bg-[#0a0a0f] text-white selection:bg-blue-500/30">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[10%] w-125 h-125 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div
            className="absolute bottom-0 right-[10%] w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2000 h-200 bg-indigo-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="grid gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-12 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Heart className="w-6 h-6 text-white fill-white/20" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    PetConnect
                  </h2>
                  <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-medium">
                    Adoption Platform
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm text-[15px]">
                Connecting loving families with pets in need. Every adoption is
                a story of hope, love, and new beginnings.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:text-white hover:border-transparent hover:scale-110 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="text-xs font-bold text-gray-300 uppercase tracking-[0.15em] mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                        <ChevronRight className="w-3 h-3 text-blue-400" />
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold text-gray-300 uppercase tracking-[0.15em] mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    text: "Dhaka, Bangladesh",
                  },
                  { icon: Phone, title: "Phone", text: "+880 1234-567890" },
                  {
                    icon: Mail,
                    title: "Email",
                    text: "support@petconnect.com",
                  },
                ].map((item, index) => (
                  <li key={index} className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-medium">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5 group-hover:text-gray-400 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold text-gray-300 uppercase tracking-[0.15em] mb-6">
                Newsletter
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Get updates on new pets and heartwarming success stories
                directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300"
                  />
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ${
                    subscribed
                      ? "bg-green-500/10 text-green-400 border border-green-500/20 cursor-default"
                      : "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {subscribed ? (
                    <>Subscribed Successfully!</>
                  ) : (
                    <>
                      Subscribe <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="relative pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} PetConnect. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm text-gray-500">
                {["Privacy Policy", "Terms & Conditions", "Sitemap"].map(
                  (text) => (
                    <Link
                      key={text}
                      href={`/${text.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                      className="hover:text-white transition-colors relative group"
                    >
                      {text}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:shadow-blue-500/50 z-50 backdrop-blur-sm ${
            showBackToTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </footer>
    </div>
  );
}
