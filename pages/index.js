import styles from "../styles/Home.module.css"
import Head from "next/head"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Nft Marketplace</title>
                <meta name="description" content="Nft Marketplace"></meta>
                <link rel="icon" href="./../public/favicon.ico" />
            </Head>
            Hi!
        </div>
    )
}