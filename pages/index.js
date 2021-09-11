import Layout from "../components/layout"
import Title from "../components/title"
export default function Home(){
    return(
        <Layout>
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