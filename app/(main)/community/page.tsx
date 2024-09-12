"use client"
import Post from "@/components/community-compo/post"

export default function Page(){
    return(
        <div className="w-full h-full  px-6 py-3 flex ">
            <div className="w-3/5 flex flex-col gap-4 items-center overflow-y-auto">
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div className="w-2/5 h-[300px] bg-green-200">
            </div>
        </div>
    )
}