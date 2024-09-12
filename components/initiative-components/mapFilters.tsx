import Image from "next/image"
import mp from "@/public/mp.svg"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  

const NearByIntiativesInMap = ()=> {
    return(
        <div className="w-full flex flex-col gap-4 p-6 text-black bg-white rounded-lg M3boxShadow1">
            <h3 className="font-semibold text-xl">Near By Initiatives</h3>
            <div className="w-full flex justify-between">
                <div className="w-7/10 h-[380px]  overflow-hidden">
                    <Image className="w-full h-full object-cover rounded-lg" src={mp} alt="Img" />
                </div>
                <div className="w-3/10 h-full flex  flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-medium">Filters</h3>
                        <div className="flex flex-col gap-3">
                            <div className="w-full flex justify-between items-center">
                                <p>Type :</p>
                                <Select >
                                    <SelectTrigger className="w-3/5 h-8">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Tree Planting</SelectItem>
                                        <SelectItem value="dark">Plastic Recovery</SelectItem>
                                        <SelectItem value="system">River Cleaning</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p>Duration :</p>
                                <Select >
                                    <SelectTrigger className="w-3/5 h-8">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">6 hours</SelectItem>
                                        <SelectItem value="dark">12 hours</SelectItem>
                                        <SelectItem value="system">4 hours</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NearByIntiativesInMap;