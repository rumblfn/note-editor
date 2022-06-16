import { FC, useId, useState } from "react"
import { NewNoteInstruments } from "../../components/NewNoteInstruments"
import { NoteWhiteList } from "../../components/NoteWhiteList"
import { NoteAction, NoteActionTypes } from "../../types/note";
import { ModalWithInput } from "../../components/ModalWithInput";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

export const NewNote:FC = () => {
    const navigate = useNavigate()
    const id = useId()

    const { addNote } = useActions();

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [articleTitle, setArticleTitle] = useState<string>('');

    const [actions, setActions] = useState<NoteAction[]>([
        {
            type: NoteActionTypes.HEADING,
            content: '',
        }
    ]);

    if (submitted) {
        addNote(articleTitle, actions, id);
        navigate('/notes');
    }

    return (
        <div style={{minHeight: '100vh'}}>
            <NewNoteInstruments setActions={setActions} />
            <NoteWhiteList 
                publishNote={setModalActive}
                setActions={setActions} 
                actions={actions}
            />
            {
                modalActive ?
                    <ModalWithInput
                        setTitle={setArticleTitle}
                        setActive={setModalActive} 
                        setSubmitted={setSubmitted}
                    />
                : null
            }
        </div>
    )
}