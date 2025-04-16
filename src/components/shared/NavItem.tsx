import { Link, useLocation } from "react-router-dom"
import { NavItemProps } from "../../lib/types"

const NavItem = ({ href, text }: NavItemProps) => {
    const { hash } = useLocation()
    console.log(hash.replace("#", "") === href.replace("/#", ""))
    return (
        <li className={`duration-200 capitalize lg:text-lg text-sm active:text-purple-400 ${hash.replace("#", "") === href.replace("/#", "") ? "text-purple-400" : "hover:text-purple-300"}`}>
            <Link to={href}>
                {text}
            </Link>
        </li>
    )
}

export default NavItem
