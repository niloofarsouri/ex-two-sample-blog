import style from '@/pages/posts/id.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



function Post({ id }) {

    const [post, setPost] = useState({})

    const route = useRouter()
    // console.log(route)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${route.query.id}`)
            .then((res) => res.json())
            .then((json) => setPost(json));
    }, [route.query])



    return (
        <>

            <Link href={`/posts/${route.query.id}/comments`}>

                <div className={style.main}>
                    <div className={style.post_card}>
                        <h2>{post.userId}</h2>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                </div>

            </Link>

        </>
    )
}


export default Post;