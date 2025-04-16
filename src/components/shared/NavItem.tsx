interface NavItemProps {
    href: string,
    text: string
}
const NavItem = ({ href, text }: NavItemProps) => {
    return (
        <li className="hover:text-purple-300 duration-200 capitalize lg:text-lg text-sm active:text-purple-400">
            <a href={href}>
                {text}
            </a>
        </li>
    )
}

export default NavItem
