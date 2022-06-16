import { FC } from "react";
import { StyledLink } from "../Link";
import { useLocation } from "react-router-dom";
import styles from './style.module.scss';

const Header: FC = () => {
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    let classNameNew = "header-link" 
    let clasNameNotes = "header-link-active"

    if (splitLocation[1] === 'new') {
        classNameNew = "header-link-active"
        clasNameNotes = "header-link" 
    }

    return (
        <header className={styles['header-bg']}>
            <nav className={styles['header-box']}>
                <StyledLink href="/notes" text="Notes" className={clasNameNotes}/>
                <StyledLink href="/new" text="New" className={classNameNew}/>
            </nav>
        </header>
    )
}

export default Header;