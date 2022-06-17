import { FC } from "react";
import { NoteAction } from "../../types/note";
import { NoteActionComponent } from "../NoteAction";
import { nanoid } from "nanoid";
import styles from './style.module.scss'
import { Button } from "./Button";

interface Props {
    actions: NoteAction[];
    setActions: (newState: NoteAction[] | 
        ((prevState: NoteAction[]) 
            => NoteAction[])) 
    => void;
    publishNote: (value: boolean) => void;
}

export const NoteWhiteList:FC<Props> = ({actions, setActions, publishNote}) => {
    
    return (
        <div>
            <div className={styles['actions-box']}>
                {actions.map((action, index) => 
                    <NoteActionComponent 
                        key={nanoid(8)}
                        index={index}
                        action={action}
                        actions={actions}
                        setActions={setActions}
                    />
                )}
            </div>
            <Button handler={publishNote}/>
        </div>
    )
}