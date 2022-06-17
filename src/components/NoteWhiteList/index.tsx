import { FC, useContext } from "react";
import { NoteActionComponent } from "../NoteAction";
import { nanoid } from "nanoid";
import styles from './style.module.scss'
import { Button } from "./Button";
import NoteActionsContext from "../../routes/NewNote/context";

export const NoteWhiteList:FC = () => {
    const contextStore = useContext(NoteActionsContext)

    if (contextStore?.actions && contextStore.publishNote)
        return (
            <div>
                <div className={styles['actions-box']}>
                    {contextStore.actions.map((action, index) => 
                        <NoteActionComponent 
                            key={nanoid(8)}
                            index={index}
                            action={action}
                            actions={contextStore.actions}
                        />
                    )}
                </div>
                <Button handler={contextStore.publishNote}/>
            </div>
        )
    return <></>
}