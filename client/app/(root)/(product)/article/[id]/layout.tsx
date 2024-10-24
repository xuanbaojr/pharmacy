
interface Props {
    children : React.ReactNode;
}

const ArticleLayout = ({children}: Props) => {

    return (
        <>
        {children}
        </>
    )
}

export default ArticleLayout;