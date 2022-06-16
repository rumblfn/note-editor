export interface NoteState {
    notes: OneNote[];
}

export enum NoteActionTypes {
    HEADING = 'HEADING',
    QUOTE = 'QUOTE',
    IMAGE = 'IMAGE',
    LINK = 'LINK',
    TEXT = 'TEXT',
    ITALIC_TEXT = 'ITALIC_TEXT',
    CODE_TEXT = 'CODE_TEXT',
    BOLD_TEXT = 'BOLD_TEXT',
    FORMULA = 'FORMULA',
    PRE_TEXT = 'PRE_TEXT'
}

export interface HeadingAction {
    type: NoteActionTypes.HEADING;
    content: string;
}

export interface QuoteAction {
    type: NoteActionTypes.QUOTE;
    content: string;
}

export interface ImageAction {
    type: NoteActionTypes.IMAGE;
    content: string;
}

export interface LinkAction {
    type: NoteActionTypes.LINK;
    linkTitle: string;
    content: string;
}

export interface TextAction {
    type: NoteActionTypes.TEXT;
    content: string;
}

export interface ItalicTextAction {
    type: NoteActionTypes.ITALIC_TEXT;
    content: string;
}

export interface CodeTextAction {
    type: NoteActionTypes.CODE_TEXT;
    language: string;
    content: string;
}

export interface BoldTextAction {
    type: NoteActionTypes.BOLD_TEXT;
    content: string;
}

export interface PreTextAction {
    type: NoteActionTypes.PRE_TEXT;
    content: string[];
}

export type NoteAction = 
    HeadingAction | 
    QuoteAction | 
    ImageAction | 
    LinkAction |
    TextAction |
    ItalicTextAction |
    CodeTextAction |
    BoldTextAction |
    PreTextAction;

export interface OneNote {
    id: string;
    title: string;
    actions: NoteAction[];
}

export interface addNoteAction {
    payload: OneNote;
}

export type NoteActionReducer = AddNoteAction;

export interface AddNoteAction {
    type: NoteActionTypesReducer.ADD_NOTE;
    payload: OneNote;
}

export enum NoteActionTypesReducer {
    ADD_NOTE = "ADD_NOTE"
}