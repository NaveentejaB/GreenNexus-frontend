"use client"
import Image from "next/image";
import SideNav from "@/components/side-navbar";
import TopNavbar from "@/components/top-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex bg-lightGreen">
        <SideNav/>
        <div className="flex-1 mainBox">
            {children}
        </div>
    </div>
  );
}

