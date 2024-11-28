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
import { Checkbox } from "@/components/ui/checkbox"
import { StaticImageData } from "next/image"


// mo ta kieu du lieu co trong bang
interface pharmacy {
    image : string | StaticImageData,
    description : string,
    price : string,
    quantity : number,
    
}

// liet ke cac o trong bang
export const PharmacyColumns: ColumnDef<pharmacy>[] = [
    {  // cot checkbox 
        id: "select",
        header: ({ table }) => (
          <Checkbox 
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="mr-3"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    { // cot hinh anh
      accessorKey: "image",
      header: ({ column }) => {
          // phan dau
        return (
          <div className="w-full ">
            hinh anh
          </div>
        )
      },
      cell: ({ row }) => {
          // cac cot phia duoi
          return (
              <div className="lowercase">
                  {row.getValue("image")}{row.getValue("description")}
              </div>
          )
      },
    }, { // cot gia ca
        accessorKey: "price",
        header : () => {
            return (
                <div>
                    gia ca
                </div>
            )
        },
        cell : ({row}) => {
          
            return (
                <div>
                   {row.getValue("price")}
                </div>
            )
        },
    },{ // cot so luong
      accessorKey :'quantity',
      header : () => {
          return (
              <div>
                  so luong
              </div>
          )
      },
      cell: ({row}) => {
          return (
              <div>
                  {row.getValue('quantity')}
              </div>
          )
      }
    }
    
  ]
  