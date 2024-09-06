"use client"
import Post from "@/components/community-compo/post"

export default function Page(){
    return(
        <div className="w-full h-full  p-6 flex ">
            <div className="w-3/5 flex flex-col items-center">
                <Post/>
            </div>
            <div className="w-2/5 h-[300px] bg-green-200">
            </div>
        </div>
    )
}