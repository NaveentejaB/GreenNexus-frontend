import Image from "next/image"
import img from "@/public/pic1.jpg"
import { Button } from "../ui/button"
import dum from "@/public/dum.svg"
import { HeartIcon ,ChatBubbleOvalLeftEllipsisIcon,ShareIcon,BookmarkIcon   } from "@heroicons/react/24/outline";


const Post = () => {
    return(
        <div className="w-[560px]  bg-white M3boxShadow rounded-lg p-6 flex flex-col gap-3">
            <div className="w-full text-black flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 overflow-hidden rounded-full">
                        <Image className="w-full h-full object-cover" src={img} alt="img"/>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-semibold">Naveen Teja Beerakuppam</span>
                        <span className="text-xs text-gray-400">Founder of GreenNexus</span>
                    </div>
                </div>
                <Button className="bg-BgDarkGreen px-10  h-8 text-sm text-black font-semibold">Follow</Button>
            </div>
            <div className="w-full text-black flex flex-col  gap-4">
                <span className="text-sm text-grayText pl-2">It is a long established fact that a reader will be  by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,nfancy. Various versions have evolved over the    f     ... <span className="text-blue-600 font-semibold cursor-pointer">Read More</span></span>
                <div className="w-full h-[240px]">
                    <Image className="w-full h-full object-cover" src={dum} alt="img"/>
                </div>

                <div className="w-full h-[1.5px] bg-gray-300"></div>
            </div>
            <div className="w-full text-black flex justify-around">
                <div className="flex gap-2 items-center cursor-pointer">
                   <HeartIcon className="h-6 w-6"/>
                   <span className="text-sm">Like</span> 
                </div>
                <div className="flex gap-2 items-center cursor-pointer">
                   <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6"/>
                   <span className="text-sm">Comment</span> 
                </div>
                <div className="flex gap-2 items-center cursor-pointer">
                   <ShareIcon className="h-6 w-6"/>
                   <span className="text-sm">Share</span> 
                </div>
                <div className="flex gap-2 items-center cursor-pointer">
                   <BookmarkIcon className="h-6 w-6"/>
                   <span className="text-sm">Save</span> 
                </div>
            </div>
        </div>
    )
}

export default Post