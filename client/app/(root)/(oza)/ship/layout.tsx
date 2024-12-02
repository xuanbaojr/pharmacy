import ProtectedRoute from '@/components/ProtectedRoute';
const ShipLayout = ({children} : {children : React.ReactNode}) => {

    return (
        <>
        {/* <ProtectedRoute> */}
            {children}
        {/* </ProtectedRoute> */}
        </>
    )
}

export default ShipLayout