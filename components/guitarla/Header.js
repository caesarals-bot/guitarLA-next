import Image from "next/image"
import { NavBarGuitarLA } from "../ui/NavBarGuitarLA"

import styles from '../../styles/Header.module.css'
import Link from "next/link"

export const Header = () => {
  return (
    <header
        className={styles.header}
    >
        <div className="contenedor">
            <div>
                <Link href='/'>
                    <Image 
                            src="/img/logo.svg"
                            alt="logo"
                            width={400}
                            height={100}
                    /> 
                </Link>
            </div>
            <NavBarGuitarLA />
        </div>
    </header>
  )
}
