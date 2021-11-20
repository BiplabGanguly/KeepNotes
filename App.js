import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav } from './Component/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AppBody } from './Component/AppBody';
import { Notes } from './Component/Notes';
import { AddNotes } from './Component/AddNotes';
import './Css/Notes.css';
import { ViewNotes } from './Component/ViewNotes';
import { EditNotes } from './Component/EditNotes';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <AppBody/>
        <Route exact path = '/'><Notes/></Route>
        <Route exact path='/View/:id'><ViewNotes/></Route>
        <Route exact path= '/Add/Note'><AddNotes/></Route> 
        <Route exact path = '/Edit/:id'><EditNotes/></Route>
      </Router>
    </div>
  );
}

export default App;
