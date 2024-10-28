import ProtectedRoute from '@/components/ProtectedRoute';

interface Props {
    children : React.ReactNode;
}

const ShopLayout = ({children}: Props) => {

    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )
}

export default ShopLayout;