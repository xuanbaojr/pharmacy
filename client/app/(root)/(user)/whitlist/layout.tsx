
import ProtectedRoute from '@/components/ProtectedRoute';
const WhitlistLayout = ({children} : {children : React.ReactNode}) => {

    return (
        <>
        {/* <ProtectedRoute> */}
            {children}
        {/* </ProtectedRoute> */}
        </>
        
    )
}

export default WhitlistLayout