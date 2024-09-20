import Link from "next/link";
import styles from "@/components/header/index.module.css"



function Header() {

    return (
        <>
            <div className={styles.main_header}>
                <Link href={'/'}>Home</Link>
                <Link href={'/posts'}>Posts</Link>
                <Link href={'/about'}>About Us</Link>
            </div>
        </>
    )
}


export default Header;