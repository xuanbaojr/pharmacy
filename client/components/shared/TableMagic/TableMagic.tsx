'use client'

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { fiterColumn } from "./Data"
// import { SearchColumns, Status } from "@/client/contants/enum"
// import DropBox from "../cards/DropBox"
// import { MenuDropBox, SelectStatusBox } from "@/client/util/DataType"
// import Search from "../cards/search"
// import SelectBox from "../cards/SelectBox"



interface Props {
    listOrder: any[],
    columns : ColumnDef<any>[],
    // searchColumns : SearchColumns | null,
    // dropMenu : MenuDropBox[] | null,
    // selectBox : SelectStatusBox| null ,
}
  

const TableMagic =  ({listOrder, columns} : Props) => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const data = listOrder;
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    // bỏ qua đi 
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })
    return (
    <>
    <div className="w-full">
    
      <div className=" flex justify-between gap-4 items-center my-3 mx-10 ">
        {/*  */}
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="">
            Bộ lọc <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className=" bg-white">
          <DropdownMenuCheckboxItem
                  className=""
                  onCheckedChange={() => table.getColumn("status")?.setFilterValue("")}
                >
                  Tất cả
                </DropdownMenuCheckboxItem>
          {
            fiterColumn.map((item, index) => {
              return (
                <DropdownMenuCheckboxItem
                  className=""
                  key={index}
                  onCheckedChange={() => table.getColumn("status")?.setFilterValue(item.value)}
                >
                  {item.status}
                </DropdownMenuCheckboxItem>
              )
            })
          }
        </DropdownMenuContent>
      </DropdownMenu>

        <div className="space-x-2 flex items-center  ">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Trước
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Sau 
            </Button>
        </div>
      </div>

      

      {/* cái bảng thôi, kẹ mẹ nó  */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                    {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                    )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) 
            : 
            (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Không có đơn hàng nào
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
    
      <div className="space-x-2 flex items-center justify-end py-4 mr-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Trước
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Sau 
          </Button>
      </div>
      

    </div>
        
    </>
    )
}

export default TableMagic;