import Link from "next/link";
import {
  LayoutDashboard,
  PawPrint,
  PlusCircle,
  ClipboardList,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const navItems = [
    {
      name: "Overview",
      href: "/deshboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Requests",
      href: "/deshboard/my-requests",
      icon: ClipboardList,
    },
    {
      name: "Add Pet",
      href: "/deshboard/add-pet",
      icon: PlusCircle,
    },
    {
      name: "My Listings",
      href: "/deshboard/my-listings",
      icon: PawPrint,
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white mt-17">
      <div className="mx-auto flex max-w-6xl">
        {/* Sidebar */}
        <aside className="sticky top-0 h-screen w-72 border-r border-white/10 bg-white/5 backdrop-blur-xl">
          {/* Logo */}
          <div className="border-b border-white/10 p-6">
            <Link href="/pets" className="text-2xl font-bold">
              Adoption Dashboard
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="space-y-3 p-5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-400"
                >
                  <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-linear-to-b from-black via-zinc-950 to-black p-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
