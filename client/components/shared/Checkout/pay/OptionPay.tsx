import ZaloPay from "./zaloPay/ZaloPay"


interface optionPay {
    name : string,
    pay : React.ReactNode
}

export const listOptionPay : optionPay[] = [
    {
        name : "zalopay",
        pay : <ZaloPay />
    },
    {
        name : "Thanh toán khi nhận hàng",
        pay : <></>
    }
]
