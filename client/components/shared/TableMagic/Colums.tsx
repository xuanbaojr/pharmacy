'use client'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { fiterColumn, TableDataType } from "./Data"
import { formatNumber } from "@/utils/mixin"

export const TableColumns: ColumnDef<TableDataType>[] = [
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: 'Người nhận',
      cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "address",
      header: 'Địa chỉ',
      cell: ({ row }) => <div className="lowercase">{row.getValue("address")}</div>,
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Số tiền </div>,
      cell: ({ row }) => {
  
        return <div className="text-right font-medium">{formatNumber(row.getValue("amount"))}</div>
      },
    },
    {
      id: "actions",
      header: "Cập nhật",
      cell: ({ row }) => {
        const payment = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-300">
              <DropdownMenuLabel>Trạng thái đơn hàng</DropdownMenuLabel>
              {
                fiterColumn.map((item, index) => {
                  return (
                  <DropdownMenuItem
                    key={index}
                    className=" hover:bg-gray-200 rounded-lg"
                    // onClick={() => navigator.clipboard.writeText(payment.id)}
                  >
                    {item.status}
                  </DropdownMenuItem>
                  )
                })
              }
              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]