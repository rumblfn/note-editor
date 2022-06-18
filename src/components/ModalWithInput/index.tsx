import { FC, useContext, useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import NoteActionsContext from "../../routes/NewNote/context";
import { NoteActionTypes } from "../../types/note";
import { ListOfTags } from "../ListOfTags";
import { Button } from "../NoteWhiteList/Button";
import styles from './style.module.scss'

interface ModalWithInputProps {
    publishNote: (tags: string[]) => void;
    setTitle: (value: string) => void;
    setActive: (value: boolean) => void;
}

export const ModalWithInput:FC<ModalWithInputProps> = ({publishNote, setTitle, setActive}) => {
    const context = useContext(NoteActionsContext)

    const actions = useMemo(() => {
        if (context && context.actions)
            return context.actions
        return []
    }, [context])

    const tags: string[] = []
    actions.forEach(action => {
        if (action.type !== NoteActionTypes.IMAGE 
            && action.type !== NoteActionTypes.CODE_TEXT
        ) {
                tags.push(...action.tags)
        }
    })

    const [newTags, setNewTags] = useState([...tags])

    const [newTagsField, setNewTagsField] = useState('')
    const [newTagsFiledDebounced] = useDebounce(newTagsField, 500)

    useEffect(() => {
        let regex = /#(\w*[0-9a-zA-Zа-яA-Я]+\w*[0-9a-zA-Zа-яA-Я])/gi;
        let matches = newTagsFiledDebounced.match(regex);
        setNewTags(prev => [...prev, ...matches || []])
    }, [newTagsFiledDebounced])
    
    return (
        <div className={styles.modal} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div>
                    <h4>Title for note</h4>
                    <input className={styles.input} type="text"
                        placeholder="type title here"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <h4>You can type new tags here</h4>
                    <input className={styles.input} type="text"
                        placeholder="type tags with # here"
                        onChange={e => setNewTagsField(e.target.value)}
                    />
                </div>
                <div>
                    <ListOfTags tags={newTags} setTags={setNewTags} />
                </div>
                <div className={styles.modal__submit}>
                    <Button
                        click={() => {publishNote(newTags)}}
                        valueToSet={false}
                        text='Submit'
                        variant="small"
                    />
                </div>
            </div>
        </div>
    )
}