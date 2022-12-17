import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import SortKeyboardMenu from "../components/SortKeyboardMenu"
import styles from '../styles/header.module.css'

export default function Keyboards() {
    return (
        <div>
            <Header className={`${styles.shadow}`}/>
            <SortKeyboardMenu/>
            <Footer />
        </div>
    )
}