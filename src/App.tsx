import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import './app.scss'
import { Background } from './components/Background';
import Header from './components/Header';
import FilteredTagsContext from './context';
import { NewNote } from './routes/NewNote';
import { NotesPage } from './routes/Notes';
import { NoteAction, NoteActionTypes } from './types/note';

const tagsSearched = {}

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagsDebounced] = useDebounce(tags, 500)

  const [actions, setActions] = useState<NoteAction[]>([
    {
        type: NoteActionTypes.HEADING,
        content: '',
        tags: []
    }
]);

  return (
    <FilteredTagsContext.Provider value={{
      tags: tagsDebounced, setTags, tagsSearched
    }}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/new" element={
            <NewNote actions={actions} setActions={setActions}/>
          } />
          <Route path="/*" element={
            <NotesPage setActions={setActions} />
          } />
        </Routes>
        <Background/>
      </div>
    </FilteredTagsContext.Provider>
  );
}

export default App;
