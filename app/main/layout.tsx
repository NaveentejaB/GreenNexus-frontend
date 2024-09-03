"use client"
import Image from "next/image";
import SideNav from "@/components/side-navbar";
import TopNavbar from "@/components/top-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex bg-lightGreen">
      <div className="w-60 h-full">
        <SideNav />
      </div>
      <div className="h-full flex-1">
        <div className="h-16 w-full">
          <TopNavbar />
        </div> 
        <main className="w-full overflow-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}

