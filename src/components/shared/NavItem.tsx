import { useLocation } from "react-router-dom"
import { NavItemProps } from "../../lib/types"
import { HashLink } from "react-router-hash-link"

const NavItem = ({ href, text }: NavItemProps) => {
    const { hash } = useLocation()
    return (
        <li className={`duration-200 capitalize lg:text-lg text-sm active:text-purple-400 ${hash.replace("#", "") === href.replace("/#", "") ? "text-purple-400" : "hover:text-purple-300"}`}>
            <HashLink to={href}>
                {text}
            </HashLink>
        </li>
    )
}

export default NavItem
