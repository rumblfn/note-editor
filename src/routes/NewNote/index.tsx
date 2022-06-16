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
    const [noteTitle, setNoteTitle] = useState<string>('');

    const [actions, setActions] = useState<NoteAction[]>([
        {
            type: NoteActionTypes.HEADING,
            content: '',
        }
    ]);

    const publishNote = () => {
        setModalActive(false);
        addNote(noteTitle, actions, id);
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
                        setActive={setModalActive}
                        setTitle={setNoteTitle}
                        publishNote={publishNote}
                    />
                : null
            }
        </div>
    )
}