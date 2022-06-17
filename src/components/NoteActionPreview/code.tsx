import { FC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from './style.module.scss'

interface SyntaxCodeProps {
    content: string;
    language: string;
}

export const SyntaxCodePreview:FC<SyntaxCodeProps> = ({
    content, language 
}) => {
    if (content)
        return (
            <div className={styles.code}>
              <SyntaxHighlighter language={language} style={docco}>
                {content}
              </SyntaxHighlighter>
            </div>
        )
    return null
}