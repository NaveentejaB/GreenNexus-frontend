"use client"
import Image from "next/image";
import BgImg from '@/public/auth/imgBg.svg'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen bg-lightGreen">
        <div className="w-full h-full flex ">
            <div className="w-3/5 h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px]">
                    <Image className="w-full h-full object-cover" src={BgImg} alt="bg-image"/>
                </div>
            </div>
            <div className="M3boxShadow w-2/5 h-full flex justify-center items-center bg-white ">
                {children}
            </div>
        </div>
    </div>
  );
}

