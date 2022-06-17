import { ChangeEvent, FC, useContext } from "react";
import { StyledLink } from "../Link";
import { useLocation } from "react-router-dom";
import styles from './style.module.scss';
import FilteredTagsContext from "../../context";

const Header: FC = () => {
    const { pathname } = useLocation();
    const splitLocation = pathname.split("/");

    const context = useContext(FilteredTagsContext);
    if (!context || !context.setTags)
        return null
    const { setTags } = context

    let classNameNew = "header-link" 
    let clasNameNotes = "header-link-active"

    if (splitLocation[1] === 'new') {
        classNameNew = "header-link-active"
        clasNameNotes = "header-link" 
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTags([...e.target.value.split(' ')])
    }

    return (
        <header className={styles['header-bg']}>
            <nav className={styles['header-box']}>
                <div className={styles['header-box-left']}>
                    <StyledLink href="/notes" text="Notes" className={clasNameNotes}/>
                    <StyledLink href="/new" text="New" className={classNameNew}/>
                </div>
                <div className={styles['input-box']}>
                    <input type="text"
                        onChange={handleInput}
                        className={styles.input} 
                        placeholder="Type some tags here ..." 
                    />
                </div>
                {/* <div>
                    <StyledLink href="/" text="Search" className="header-link" />
                </div> */}
            </nav>
        </header>
    )
}

export default Header;