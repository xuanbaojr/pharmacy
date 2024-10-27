

interface Props {

}

const CheckoutPage = ({ params }: { params: { id: string } }) => {

    return (
        <div>
            {params.id}
        </div>
    )
}

export default CheckoutPage