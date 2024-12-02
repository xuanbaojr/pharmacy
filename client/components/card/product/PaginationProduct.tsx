'use client'
import { Location } from '@/app/(root)/(user)/shop/[id]/page';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
    page : number,
    min : number | null,
    max : number | null,
    category : string | null
}

const PaginationProduct = ({page, min, max, category} : Props) => {
    const router = useRouter()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        const path : Location = {
            page : value,
            min :min !== null ? min : undefined,
            max : max !== null ? max : undefined,
            searchName : category !== null ? category : undefined
        }
        const userString = encodeURIComponent(JSON.stringify(path));
      router.push(`/shop/${userString}`)
    };
    return (
        <div>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>
    )
}

export default PaginationProduct