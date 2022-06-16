import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.scss'
import { Background } from './components/Background';
import Header from './components/Header';
import { NewNote } from './routes/NewNote';
import { NotesPage } from './routes/Notes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/new" element={<NewNote />}/>
        <Route path="/*" element={<NotesPage />}/>
      </Routes>
      <Background/>
    </div>
  );
}

export default App;
