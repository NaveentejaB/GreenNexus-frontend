"use client"
import NearByInitiativeTable from "@/components/initiative-components/near-by-initiatives-table"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import NearByIntiativesInMap from "@/components/initiative-components/mapFilters"
  

export default function Page(){
    return(
        <div className="w-full h-full  p-6 flex flex-col gap-6 ">
            <NearByIntiativesInMap/>
            <div className="w-full flex flex-col gap-2 px-6 py-4 text-black bg-white M3boxShadow rounded-lg">
                <div className="w-full overflow-hidden">
                    <NearByInitiativeTable/>
                </div>
                <div className="w-full flex justify-end">
                    <Pagination className="flex justify-end">
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem className="hover:bg-BgDarkGreen selection:bg-BgDarkGreen rounded-lg">
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}