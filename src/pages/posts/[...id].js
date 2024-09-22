import style from '@/pages/posts/comments.module.css'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';



function Comment() {

    const [comments, setComments] = useState([])
    const [title, setTitle] = useState()

    const route = useRouter()

    useEffect(() => {

        if (route.query.id) {
            setTitle(route.query.id[0])
        }

    }, [route.query])

    console.log(title)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        fetch(`https://jsonplaceholder.typicode.com/posts/${title}/comments`)

            .then((res) => res.json())
            .then((json) => setComments(json));
    }, [title])

    console.log(comments)


    return (
        <>
            <Head>
                <title>Comments</title>
            </Head>

            <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>comments</h1>

            {
                comments.map(item => {
                    return (
                        <div className={style.main}>
                            <div className={style.post_comment_card} key={item.id}>
                                <h2>{item.name}</h2>
                                <h4>{item.email}</h4>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}


export default Comment;
