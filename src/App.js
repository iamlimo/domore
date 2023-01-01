import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Note from './pages/Note';
import Untagged from './pages/Untagged';
import Todo from './pages/Todo';
import Today from './pages/Today';
import Locked from './pages/Locked';
import Trash from './pages/Trash';

function App() {
  return (
    <>
    <Router>
    <Sidebar/>
    <Routes>
      <Route path='/notes' element={<Note/>} />
      <Route path='/untagged' element={<Untagged/>} />
      <Route path='/todo' element={<Todo/>} />
      <Route path='/today' element={<Today/>} />
      <Route path='/locked' element={<Locked/>} />
      <Route path='/trash' element={<Trash />} />
    </Routes>
    </Router>
     
    </>
  );
}

export default App;
