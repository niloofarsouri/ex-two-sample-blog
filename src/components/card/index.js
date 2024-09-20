import styles from '@/components/card/index.module.css'
import Link from 'next/link';



function Card({ id, userId, title, body }) {


    return (

        <div className={styles.main}>
            <Link href={`/posts/${id}`}>
                <div className={styles.main_card} key={id}>
                    <h2>{userId}</h2>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </Link>
        </div>

    )
}


export default Card;