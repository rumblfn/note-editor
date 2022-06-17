import { FC } from "react";
import { Button } from "../NoteWhiteList/Button";

interface UploadFileProps {
    handler: (e: any) => void;
}

export const UploadFile:FC<UploadFileProps> = ({handler}) => {
    return (<>
        <label htmlFor="file-upload">
            <span>Select image</span>
            <Button
                upload={true}
                ml="12px"
                variant="small"
                text='upload'
            />
        </label>
        <input
            id="file-upload" type="file" 
            style={{display: 'none'}}
            onChange={e => {handler(e)}}
        />
    </>)
}