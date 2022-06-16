import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from './style.module.scss'

interface StyledLinkProps {
    href: string,
    text: string,
    className: string
}

export const StyledLink:FC<StyledLinkProps> = ({href, text, className}) => {
    return (
        <NavLink to={href} className={styles[className]}>
            {text}
        </NavLink>
    )
}