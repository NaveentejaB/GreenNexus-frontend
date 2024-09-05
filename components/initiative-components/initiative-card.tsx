import { MapPinIcon,CalendarIcon,UserCircleIcon   } from "@heroicons/react/24/outline";
import UserTable from "./user-table";

const InitiativeCard = ()=>{
    return(
        <div className="w-full h-full flex flex-col text-black text-sm gap-4">
            <h3 className="text-xl font-semibold">Initiative Details</h3>
            <div className="w-full flex justify-between">
                <div className="w-[280px] h-fit flex flex-col  bg-BgDarkGreen rounded-lg p-6">
                    <h4 className="font-semibold text-lg">Tree Planting</h4>
                    <div className="w-full h-[100px]"></div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <UserCircleIcon className="w-5 h-5"/>
                            <span className="text-sm">Naveen Teja</span>
                        </div>
                        <div className="flex gap-3">
                            <MapPinIcon className="w-5 h-5"/>
                            <span className="text-sm">Narsingpur</span>
                        </div>
                        <div className="flex gap-3">
                            <CalendarIcon className="w-5 h-5"/>
                            <span className="text-sm">19-12-2025</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <UserTable/>
                </div>
            </div>

        </div>
    )
}

export default InitiativeCard