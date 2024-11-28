import { listOrder } from "@/components/shared/CartList/CartType";
import CheckoutContain from "@/components/shared/Checkout/CheckoutContain";


interface Props {

}

const CheckoutPage = ({ params }: { params: { id: string } }) => {

    return (
        <div className="mx-32 px-4 my-5">
            <CheckoutContain listOrder={listOrder}/>
           
        </div>
    )
}

export default CheckoutPage

const splitStringByComma = (input: any): string[] => {
    // Kiểm tra nếu input là chuỗi
    if (typeof input !== 'string') {
        throw new Error("Input must be a string" + typeof input);
    }

    // Sử dụng phương thức split để chia chuỗi
    return input.split('%2C').filter(item => item.trim() !== ''); // Lọc các chuỗi rỗng nếu có
};