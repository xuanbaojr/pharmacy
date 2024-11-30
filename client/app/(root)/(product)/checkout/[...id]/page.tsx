import CheckoutContain from "@/components/shared/Checkout/CheckoutContain";


interface Props {

}

const CheckoutPage = ({ params }: { params: { id: string } }) => {

    return (
        <div className="mx-32 px-4 my-5">
            <CheckoutContain />
           
        </div>
    )
}

export default CheckoutPage

