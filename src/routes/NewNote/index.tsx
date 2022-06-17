import { FC, useState } from "react"
import { NewNoteInstruments } from "../../components/NewNoteInstruments"
import { NoteWhiteList } from "../../components/NoteWhiteList"
import { NoteAction, NoteActionTypes } from "../../types/note";
import { ModalWithInput } from "../../components/ModalWithInput";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";
import NoteActionsContext from "./context";
import { nanoid } from "nanoid";

export const NewNote:FC = () => {
    const navigate = useNavigate()
    const id = nanoid(8)

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
        <NoteActionsContext.Provider value={{
            setActions, actions, publishNote: setModalActive
        }}>
            <div>
                <NewNoteInstruments />
                <NoteWhiteList/>
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
        </NoteActionsContext.Provider>
    )
}