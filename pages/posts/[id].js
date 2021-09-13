import Head from 'next/dist/shared/lib/head';
import Layout from '../../components/layout';
import Title from '../../components/title';

export default function Post({ post }){
    
    return(
        <Layout>  
            <Head>
                <title>Post #{post.id}</title>
                <meta name="description"  content="Ejercicios de curso de Youtube, con el Framework NextJS" />
                
            </Head>          
            <Title >Post Details</Title>
            <div className='card'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <style jsx>
                {`
                    .grid {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 800px;
                    margin-top: 2rem;
                    }
                    .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    color: black;
                    text-decoration: none;
                    border: 2px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                    }
                    .card:hover,
                    .card:focus,
                    .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                    }
                    .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                    }
                    .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                    }
                `}
            </style>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    //context.params.id
    const res = fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await (await res).json();

    return {
        props: {
            post
        }
    }
}