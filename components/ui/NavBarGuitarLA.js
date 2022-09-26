import Link from "next/link"

export const NavBarGuitarLA = () => {
  return (
    <nav>
        <Link href="/">inicio</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/tienda">Tienda</Link>
    </nav>
  )
}
