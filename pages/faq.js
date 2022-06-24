import Head from "next/head";
import { useEffect, useState } from "react"
import Link from "../src/components/Link"


/**
 * It fetches data from an API and returns it as props
 * @returns The return of the function is the props object.
 */
export async function getStaticProps () {

    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((res) => {
            return res.json();
        }).then((resposta) => {
            return resposta;
        })
    return {
        props: {
            faq
        },
    }
}


export default function FaqPage ({ faq }) {
    
    // const [faq, setFaq] = useState([])
    // useEffect(() => {

    // }, [])

    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            
            <Link href="/">
                ir para home
            </Link>
            <ul>
                {faq.map(({ answer, question }) => {
                    return (
                        <li key={question}>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}