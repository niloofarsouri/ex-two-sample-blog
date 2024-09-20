import Card from '@/components/card';
import styles from '@/pages/posts/index.module.css';
import { useState, useEffect } from 'react';


function Posts() {

    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((json) => setPosts(json));
    }, [])




    return (
        <>
            <div className={styles.main_posts}>
                <h1>See All Of The Posts</h1>


                <div className={styles.posts}>
                    {
                        posts.map(item => {
                            return <Card
                                key={item.id} {...item}
                            />
                        })
                    }
                </div>

            </div>
        </>
    )
}


export default Posts;