import { FC, useState, useRef } from "react";
import { checkFileTypeAndSize } from "../static/checkFileTypeAndSize";
import encodeImageFileAsURL from "../static/encodeImageFileAsURL";
import { UploadFile } from "../UploadFile";
import { Xmark } from "../Xmark";
import styles from './style.module.scss'

interface QuoteNoteProps {
    removeAction: () => void;
    content: string;
    handleText: (value: string) => void;
}

export const ImageNote:FC<QuoteNoteProps> = ({
    removeAction, content, handleText
}) => {
    const [imageData, setImageData] = useState<string>(content);
    const imageUploadedRef = useRef(null);

    const handleUploadedFileImage = (e: any) => {
        if (!e.target.files.length) {
            return
        }
        const check = checkFileTypeAndSize(e, 'image');
        if (check) {
            encodeImageFileAsURL(e, setImageDataFull);
        }
    }

    const setImageDataFull = (data: string) => {
        setImageData(data)
        handleText(data)
    }

    return (
        <div className={styles["action-box"]} style={{marginTop: 16}}>
            {!imageData && <UploadFile handler={handleUploadedFileImage}/>}
            {imageData &&
                <img className={styles['img-action']} 
                    ref={imageUploadedRef} 
                    src={imageData} 
                    alt="картинка"
            />}
            <Xmark removeAction={removeAction} />
        </div>
    )
}