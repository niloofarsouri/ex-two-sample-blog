import Layout from "@/components/layout";
import Postslayout from "@/components/layout/postsLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {

  const path = usePathname()
  console.log(path)

  if (path.startsWith('/posts')) {
    return (
      <>
        <Postslayout>
          <Component {...pageProps} />
        </Postslayout>
      </>
    )
  } else

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
}
