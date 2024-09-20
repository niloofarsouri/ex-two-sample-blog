import style from '@/components/layout/postsLayout.module.css'
import Link from 'next/link';
import Footer from '../footer';




function Postslayout({ children }) {


    return (
        <>
            <header className={style.main_header}>
                <Link href={'/'}>Home</Link>
                <Link href={'/posts'}>Posts</Link>
                <Link href={'/about'}>About Us</Link>
            </header>

            {children}

            <Footer />
        </>
    )
}


export default Postslayout;

