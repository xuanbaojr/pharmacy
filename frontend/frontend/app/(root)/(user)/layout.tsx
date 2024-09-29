
interface Props {
    children : React.ReactNode;
}

const UserLayout = ({children}: Props) => {

    return (
        <>
        {children}
        </>
    )
}

export default UserLayout;