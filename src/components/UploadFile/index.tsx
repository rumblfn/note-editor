import { FC, useRef } from "react";
import { Button } from "../NoteWhiteList/Button";

interface UploadFileProps {
    handler: (e: any) => void;
}

export const UploadFile:FC<UploadFileProps> = ({handler}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleBtnClick = () => {
        inputRef?.current?.click()
    }

    return (<>
        <label htmlFor="file-upload">
            <span>Select image</span>
            <Button
                upload={true}
                ml="12px"
                variant="small"
                text='upload'
                click={handleBtnClick}
            />
        </label>
        <input ref={inputRef}
            id="file-upload" type="file" 
            style={{display: 'none'}}
            onChange={e => {handler(e)}}
        />
    </>)
}