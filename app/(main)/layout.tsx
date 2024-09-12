"use client"
import Image from "next/image";
import SideNav from "@/components/side-navbar";
import TopNavbar from "@/components/top-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-lightGreen">
      <SideNav />
      <div className="flex-1 flex flex-col ml-64">
        <TopNavbar />
        <main className="flex-1 px-2 pt-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

