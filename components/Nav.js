import Link from "next/link";
 
import Style from '../styles/Nav.module.css'
const Nav =() =>{
    return(
        <nav className={Style.nav}>
            <ul className={Style.links}>
            <li className={Style.li}>
                <Link href="/"><a className={Style.a}>Home</a></Link>
            </li>
            <li className={Style.li}>
                <Link href="/blog/about"><a className={Style.a}>About</a></Link>
            </li>
            </ul>
      
        </nav>
    )
}
export default Nav;