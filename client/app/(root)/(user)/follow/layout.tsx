import ProtectedRoute from '@/components/ProtectedRoute';
const FollowLayout = ({children} : {children : React.ReactNode}) => {

    return (
        <>
        {/* <ProtectedRoute> */}
            {children}
        {/* </ProtectedRoute> */}
        </>
        
    )
}

export default FollowLayout