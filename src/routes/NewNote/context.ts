import { createContext } from "react";
import { NoteAction } from "../../types/note";

interface ContextInterface {
    actions: NoteAction[];
    setActions: (newState: NoteAction[] | 
        ((prevState: NoteAction[]) 
            => NoteAction[])) 
    => void;
    publishNote: (value: boolean) => void;
    setTags: (newState: string[] | 
        ((prevState: string[]) 
            => string[])) 
    => void;
}

const NoteActionsContext = createContext<ContextInterface | null>(null)
export default NoteActionsContext