import { MoralisProvider } from "react-moralis"
import Head from "next/head"
import "../styles/globals.css"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Nft Marketplace</title>
                <meta name="description" content="Nft Marketplace"></meta>
                <link rel="icon" href="../public/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </div>
    )
}

export default MyApp
