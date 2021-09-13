import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";


export default function Home(){
    return(
        <Layout>
            <Head>
                <title>Curso NextJS</title>
                <meta name="description"  content="Ejercicios de curso de Youtube, con el Framework NextJS" />
                <link  rel="icon"   href="/images/favicon.ico" type="image/png" />
            </Head>
            <Title>Home page</Title>
            <p> Aprendamos NextJS</p>
            <style>
                {`
                    p {
                     color: #B8B8B8;
                    }
                    p:hover{ 
                     color: #111111;
                    }
                `}
            </style>
        </Layout>
    )
}