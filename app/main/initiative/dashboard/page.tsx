"use client"
import InitiativeTable from "@/components/initiative-components/initiative-table"


export default function Page(){
    return(
        <div className="w-full h-full  p-6">
            <div className="w-full flex flex-col gap-2 p-6 text-black bg-white M3boxShadow rounded-lg">
                <h3 className="text-xl font-semibold">My initiatives</h3>
                <InitiativeTable/>
            </div>
        </div>
    )
}