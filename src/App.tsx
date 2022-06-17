import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import './app.scss'
import { Background } from './components/Background';
import Header from './components/Header';
import FilteredTagsContext from './context';
import { NewNote } from './routes/NewNote';
import { NotesPage } from './routes/Notes';

const tagsSearched = {}

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagsDebounced] = useDebounce(tags, 500)

  return (
    <FilteredTagsContext.Provider value={{
      tags: tagsDebounced, setTags, tagsSearched
    }}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/new" element={<NewNote />} />
          <Route path="/*" element={<NotesPage />} />
        </Routes>
        <Background/>
      </div>
    </FilteredTagsContext.Provider>
  );
}

export default App;
