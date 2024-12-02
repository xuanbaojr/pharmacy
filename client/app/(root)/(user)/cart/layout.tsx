import ProtectedRoute from '@/components/ProtectedRoute';
const CartLayout = ({children} : {children : React.ReactNode}) => {

    return (
        <>
        {/* <ProtectedRoute> */}
            {children}
        {/* </ProtectedRoute> */}
        </>
        
    )
}

export default CartLayout