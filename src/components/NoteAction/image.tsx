import { FC, useState, useRef } from "react";
import { checkFileTypeAndSize } from "../static/checkFileTypeAndSize";
import encodeImageFileAsURL from "../static/encodeImageFileAsURL";
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
            {!imageData && <>
                <label htmlFor="file-upload">
                    <span>Select image</span>
                    <button>
                        <label htmlFor="file-upload">Upload</label>
                    </button>
                </label>
                <input id="file-upload" type="file"
                    onChange={e => {handleUploadedFileImage(e)}}/>
            </>}
            {imageData &&
                <img ref={imageUploadedRef} 
                    src={imageData} 
                    alt="картинка"
            />}
            <span onClick={removeAction} 
                className={styles["action-box-rm"]}
                style={{backgroundColor: 'white', mixBlendMode: 'hard-light'
            }}>
                <i className="fa-solid fa-xmark" />
            </span>
        </div>
    )
}