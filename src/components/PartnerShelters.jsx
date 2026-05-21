"use client";

import {
  Building2,
  Heart,
  Stethoscope,
  Globe,
  Shield,
  Network,
  ArrowUpRight,
  CheckCircle2,
  BadgeCheck,
  PawPrint,
} from "lucide-react";

const partners = [
  {
    id: 1,
    name: "Paws Rescue Center",
    type: "Rescue Organization",
    description:
      "Dedicated to rescuing stray and abandoned animals across the capital city region.",
    stats: { pets: "450+", since: "2018" },
    icon: PawPrint,
    accent: "from-rose-500 to-orange-500",
    light: "from-rose-50 to-orange-50",
  },
  {
    id: 2,
    name: "Hope Animal Shelter",
    type: "Shelter Partner",
    description:
      "Providing temporary homes, rehabilitation, and behavioral training for rescued animals.",
    stats: { pets: "320+", since: "2015" },
    icon: Building2,
    accent: "from-blue-500 to-indigo-500",
    light: "from-blue-50 to-indigo-50",
  },
  {
    id: 3,
    name: "CareVet Clinic",
    type: "Veterinary Partner",
    description:
      "Full-service veterinary care ensuring every pet is vaccinated and healthy before adoption.",
    stats: { pets: "800+", since: "2012" },
    icon: Stethoscope,
    accent: "from-emerald-500 to-teal-500",
    light: "from-emerald-50 to-teal-50",
  },
  {
    id: 4,
    name: "Animal Welfare BD",
    type: "NGO Partner",
    description:
      "Nationwide advocacy and large-scale rescue operations for animal rights and welfare.",
    stats: { pets: "1.2k+", since: "2010" },
    icon: Globe,
    accent: "from-violet-500 to-purple-500",
    light: "from-violet-50 to-purple-50",
  },
  {
    id: 5,
    name: "Safe Paws Foundation",
    type: "Animal Welfare Group",
    description:
      "Community-driven initiatives and weekend adoption drives in local neighborhoods.",
    stats: { pets: "560+", since: "2020" },
    icon: Shield,
    accent: "from-amber-500 to-yellow-500",
    light: "from-amber-50 to-yellow-50",
  },
  {
    id: 6,
    name: "Rescue Mission",
    type: "Shelter Network",
    description:
      "Coordinated volunteer network connecting emergency rescuers with animals in critical need.",
    stats: { pets: "410+", since: "2017" },
    icon: Network,
    accent: "from-pink-500 to-rose-500",
    light: "from-pink-50 to-rose-50",
  },
];

export default function PartnerOrganizationsSection() {
  return (
    <section className="relative w-full py-24 px-4 md:px-12 bg-slate-50 overflow-hidden">
      {/* Dot grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-semibold mb-6">
              <BadgeCheck className="w-4 h-4 text-blue-600" />
              Trusted Network
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Our Partner{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Organizations
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-relaxed">
              We work hand-in-hand with verified shelters, veterinary clinics,
              and welfare organizations to ensure every adoption is safe,
              ethical, and transparent.
            </p>
          </div>

          {/* Header Stats */}
          <div className="flex items-center justify-evenly gap-8 lg:pb-2 bg-white px-8 py-5 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="text-sm text-slate-500 font-medium mt-0.5">
                Partners
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-500 font-medium mt-0.5">
                Verified
              </div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">3.5k</div>
              <div className="text-sm text-slate-500 font-medium mt-0.5">
                Pets Helped
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group relative bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
              style={{
                animationDelay: `${index * 75}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Top accent bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${partner.accent}`}
              />

              <div className="relative z-10 p-7">
                {/* Top row: Icon + Link */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.light} flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <partner.icon
                      className="w-7 h-7 text-slate-700"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-md -translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-slate-600" />
                  </div>
                </div>

                {/* Title & Badges */}
                <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors duration-300">
                  {partner.name}
                </h3>

                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {partner.type}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Stats Footer */}
                <div className="flex items-center gap-5 pt-5 border-t border-slate-100">
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {partner.stats.pets}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Pets Helped
                    </div>
                  </div>
                  <div className="w-px h-8 bg-slate-100" />
                  <div>
                    <div className="text-base font-bold text-slate-900">
                      {partner.stats.since}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      Active Since
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover gradient wash */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${partner.light} opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`}
              />
            </div>
          ))}

          {/* CTA Card */}
          <div className="group relative bg-slate-900 rounded-2xl border border-slate-800 shadow-lg hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col justify-center items-center p-8 text-center md:min-h-[340px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
            </div>

            <h3 className="relative z-10 text-xl font-bold text-white mb-2">
              Join Our Network
            </h3>
            <p className="relative z-10 text-sm text-slate-400 mb-8 max-w-[260px] leading-relaxed">
              Are you a shelter or welfare organization? Partner with us to
              reach thousands of loving homes.
            </p>

            <button className="relative z-10 px-7 py-2.5 rounded-full bg-white text-slate-900 text-sm font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm text-slate-400 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Background Checked
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Annual Inspections
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Ethical Standards
          </span>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
