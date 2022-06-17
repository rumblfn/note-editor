import { createContext } from "react";

interface ContextInterface {
    handleText: (text: string) => void;
    removeAction: () => void;
    handleLang: (text: string) => void;
}

const NoteActionsContextHandlers = createContext<ContextInterface | null>(null)
export default NoteActionsContextHandlers