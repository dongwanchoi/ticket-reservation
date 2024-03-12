import Header from './header';
import Footer from './footer';

export default function Layout({ children }){ //요소
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}