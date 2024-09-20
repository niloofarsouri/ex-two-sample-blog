import styles from "@/styles/Home.module.css";



export default function Home() {


  return (
    <>
      <div className="slide-first">
        <h1 style={{textAlign:'center', padding:'1rem'}}>Wellcome to my Blog</h1>
        <p style={{ background: 'black', width: '100%', height: '70px' }}></p>
      </div>

      <div className="slide-second">
        <img src="./kish.jpg"/>
      </div>
    </>
  );
}

