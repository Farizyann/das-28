import Link from "next/link"

export const Layout = ({ children }) => {

    return (
        <div>
            <ul>
                <li> <Link href={'/'}>Pages</Link></li>
                <li> <Link href={'/home'}>Home</Link></li>
                <li> <Link href={'/about/see'}>About</Link></li>
            </ul>
            <div>
                {children}
            </div>
        </div>
    )
}