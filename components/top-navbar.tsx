"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import img from "@/public/auth/imgBg.svg"
import { BellIcon  } from "@heroicons/react/24/outline";


export default function TopNavbar(){
    return(
        <div className="h-16 w-full bg-white text-black flex justify-between items-center px-8 M3boxShadow1">
            <h3 className="text-black text-lg font-semibold">Initiative</h3>
            <div className="flex gap-4 items-center">
                <BellIcon className="w-6 h-6 text-black mr-4 cursor-pointer"/>
                <Avatar className="w-10 h-10 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-base font-medium">Naveen Teja</span>
            </div>
        </div>
    )
}