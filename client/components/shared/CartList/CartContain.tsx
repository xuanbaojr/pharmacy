'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import { cart } from "./CartType"
import CartPharmacy from "./CartPharmacy"
import CartPresctiption from "./CartPrescription"
import { Button } from "@/components/ui/button"
import { convertCartState } from "./CartState"
import Link from "next/link"



interface Props {
    cart : cart
}


const CartContain = ({cart} : Props) => {
    const [all, setAll] = useState(false)
    const [bill, setBill] = useState(0)
    const [eff, setEff] = useState(true)
    const [cartState, setCartState] = useState(convertCartState(cart))
    
    // set tất cả các đơn hàng
    const setAllChecks = (check : boolean) => {
        setEff(!eff)
        setAll(check);
        setCartState(prevCartState => 
            prevCartState.map(item => {
                if ('pharmacy' in item) {
                    // Nếu là PrescriptionState
                    return {
                        ...item,
                        check : check,
                        pharmacy: item.pharmacy.map(ph => ({
                            ...ph,
                            check: check // Đặt check thành true
                        }))
                    };
                } else {
                    // Nếu là PharmacyState
                    return { ...item, check: check }; // Đặt check thành true
                }
            })
        );
    };
    // hàm chuyển trạng thái tích chọn
    const updateCheck = (des : string | undefined, name : string | undefined) => {
        setEff(!eff)
        setCartState(prevCartState => 
            prevCartState.map(item => {
                if ('pharmacy' in item) {
                    // Nếu là PrescriptionState
                    if (name && item.name === name) {// nếu theo đơn thuốc,
                        if (des) { // nếu theo tên
                            return {
                                ...item,
                                pharmacy: item.pharmacy.map(ph => {
                                    if (ph.description === des ) { 
                                        return { ...ph, check: !ph.check}; 
                                    }
                                    return ph;
                                })
                            };
                        } else {// tất cả
                            return {  
                                ...item,
                                check : !item.check,
                                pharmacy: item.pharmacy.map(ph => ({
                                    ...ph,
                                    check: !item.check 
                                }))
                            };
                        }
                    } 
                    return item // return nếu không gọi đến các thuốc đã có đơn
                }  else {// Nếu là PharmacyState
                    if (item.description === des && !name) {
                        return { ...item, check: !item.check }; // Cập nhật check thành true
                    }
                    return item;
                }
            })
        );
    };
    // trả về true nếu tất cả đơn hàng đều được chọn
    const allChecksTrue = (): boolean => {
        return cartState.every(item => {
            if ('pharmacy' in item) {
                // Nếu là PrescriptionState
                return item.check && item.pharmacy.every(ph => ph.check);
            }
            // Nếu là PharmacyState
            return item.check;
        });
    };
    // trả về true nếu tất cả đơn hàng trong prescription đều được chọn
    const updatePrescriptionChecks = () => {
        setCartState(prevCartState => 
            prevCartState.map(item => {
                if ('pharmacy' in item) {
                    // Nếu là PrescriptionState
                    const allPharmacyChecked = item.pharmacy.every(ph => ph.check);
                    return {
                        ...item,
                        check: allPharmacyChecked // Cập nhật check của Prescription
                    };
                }
                return item; // Nếu không phải PrescriptionState thì giữ nguyên
            })
        );
    };
    // effect kiểm tra xem các đơn hàng đã được chọn tất cả
    useEffect(() => {
        if (allChecksTrue()) {
            setAll(true)
        } else setAll(false)

        updatePrescriptionChecks()
        updateBill()
    }, [eff])

    const updateBill = () => {
        var a= 0
        cartState.map(item => {
            if ('pharmacy' in item) {
                // Nếu là PrescriptionState
                item.pharmacy.map((ph, index) => {
                    if (ph.check === true) {
                        a += ph.price * ph.quantity
                    }
                })
            } else {
                // Nếu là PharmacyState
                if (item.check === true) {
                    a += item.price
                }
            }
        })
        setBill(a)
        
    }

    const handleCheckout = () : string=> {
        var list : string = ""
        cartState.map((item, index) => {
            if ('pharmacy' in item) { // la prescription
                const allPharmacyChecked = item.pharmacy.every(ph => ph.check);
                if (allPharmacyChecked) list +=  item.name + "," 
                else {
                    item.pharmacy.map((ph, index) => {
                        if(ph.check) list +=  ph.description + ","
                    })
                }
            } else { // la phamacy
                if (item.check) list +=  item.description + "," 
            }
        })
        return list
    }

    return (
        <div>

            {/* top */}
            <div className="grid grid-cols-10 py-2 px-4 bg-slate-300 rounded-lg text-lg mb-5"> 
                <div className="col-span-6 grid grid-cols-10">
                    <div className="col-span-1 text-center">
                        <Checkbox 
                            checked = {all}
                            onCheckedChange={() => setAllChecks(!all)}
                            className="border-black"
                        />
                    </div>
                    <div className="col-span-9">
                        Mô tả sản phẩm
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-10">
                    <div className="col-span-3 text-center font-light text-base">
                        đơn giá
                    </div>
                    <div className="col-span-3 text-center">
                        số lượng
                    </div>
                    <div className="col-span-3 text-center">
                        tổng giá
                    </div>
                    <div className="col-span-1">
                        
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="space-y-2 mt-2 ">
                {
                    cartState.map((item, index) => {
                        if ('image' in item) {
                            return (
                                <CartPharmacy key={index} pharmacy={item} change={updateCheck} name={undefined} updateBill={updateBill}/>
                            )
                        }

                     return (
                        <CartPresctiption key={index} prescription={item} change={updateCheck} updateBill={updateBill}/>
                     )
                    })
                }
                
            </div>
            {/* bottom */}
            <div className=" grid grid-cols-10 sticky bottom-0 bg-slate-300 px-4 py-6 mt-10 rounded-sm">
                <div className="col-span-6 grid grid-cols-10">
                    <div className="col-span-1 flex items-center justify-center">
                        <Checkbox 
                            checked = {all}
                            onCheckedChange={() => setAllChecks(!all)}
                            className="border-black"
                        />
                    </div>
                </div>
                <div className="col-span-4 grid grid-cols-10">
                    <div className=" col-span-4">
                    </div>
                    <div className="col-span-4 flex items-center">
                        Tổng giá trị:  {bill + ".000.đ"  }
                    </div>
                    <div className="col-span-2">
                        <Link href={`/checkout/${handleCheckout()}`} >
                        <Button className="bg-blue-800 w-full" onClick={() => console.log(handleCheckout())}> mua</Button>   
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartContain

