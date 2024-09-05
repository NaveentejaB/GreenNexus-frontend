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
import { iniTableData } from "@/lib/constants" 
import { iniUserData } from "@/lib/constants"

const UserTable = () => {
    return(
        <div className="w-full overflow-x-auto text-sm">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[240px] text-center h-8">Name</TableHead>
                    <TableHead className="text-center h-8">Age</TableHead>
                    <TableHead className="text-center h-8 w-[200px]">Location</TableHead>
                    <TableHead className="text-center w-[120px] h-8">Contact</TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {iniUserData.map((item,idx)=>(
                        <TableRow className="text-black text-sm py-2 h-8" key={idx}>
                            <TableCell className="flex justify-center h-8 py-2">
                                <div className="flex gap-4 items-center">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 border border-black"></div>
                                    <span className="">{item.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-center h-8 py-2">{item.age}</TableCell>
                            <TableCell className="text-center h-8 py-2">{item.place}</TableCell>
                            <TableCell className="text-center h-8 py-2">{item.phone}</TableCell>
                            <TableCell className="text-center h-8 py-2">
                                <div className="flex justify-center gap-4">
                                    <Button className="bg-transparent border border-black text-sm text-black h-7">Edit</Button>
                                    <Button className="bg-transparent border border-red-700 text-sm text-red-700 h-7">Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default UserTable