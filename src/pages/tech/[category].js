// import styles from '@/pages/comments/index.module.css'
import { useRouter } from 'next/router';



function BlogCategory() {

    const route = useRouter()
    console.log(route)


    return (
        <>
            <h1>Blog Category: {route.query.category}</h1>
        </>
    )
}


export default BlogCategory;