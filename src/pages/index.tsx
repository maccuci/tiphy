import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import {Highlights} from "../components/Highlights"
import styles from '../styles/header.module.css'

export default function Index() {
    return (
        <div>
            <Header className={`${styles.shadow}`}/>
            <Highlights/>
            <Footer />
        </div>
    )
}