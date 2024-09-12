"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { iniTableData,NearByIniTableData } from "@/lib/constants" 


const NearByInitiativeTable = () => {
    return(
        <div className="w-full overflow-x-auto">
            <div className="min-w-[1000px]">
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="text-center">Initiative</TableHead>
                        <TableHead className="text-center px-1">Organized By</TableHead>
                        <TableHead className="text-center px-1">Max. members</TableHead>
                        <TableHead className="text-center w-[170px] ">Location</TableHead>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="text-center">Duration</TableHead>
                        <TableHead className=""></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {NearByIniTableData.map((item,idx)=>(
                            <TableRow className="text-black text-sm py-2.5 h-10" key={idx}>
                                <TableCell className="flex justify-center py-2.5">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-6 h-6 rounded-full bg-gray-100 border border-black"></div>
                                        <span className="">{item.title}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center py-2.5">{item.Organizer}</TableCell>
                                <TableCell className="text-center py-2.5">{item.max_no}</TableCell>
                                <TableCell className="text-center py-2.5">{item.location}</TableCell>
                                <TableCell className="text-center py-2.5">{item.date}</TableCell>
                                <TableCell className="text-center py-2.5">{item.duration}</TableCell>
                                <TableCell className="text-center py-2.5">
                                    <div className="flex justify-center gap-4">
                                        <Button className="bg-BgDarkGreen border border-green-950 text-sm text-black h-7">View</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default NearByInitiativeTable