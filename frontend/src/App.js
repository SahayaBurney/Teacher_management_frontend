import './App.css';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Add from './Add';
import Delete from './Delete';
import Display from './Display';
import Filtering from './Filter';
import Updating from './Update';
import Search from './Search';
import { ContactUs } from './password';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/seepassword' element={<ContactUs />}/>
        <Route path='/homepage' element={<Home/>} />
        <Route path='/homepage/add_records' element={<Add />}/>
        <Route path='/homepage/delete_records' element={<Delete />} />
        <Route path='/homepage/display_records' element={<Display />} />
        <Route path='/homepage/filter_records' element={<Filtering />}/>
        <Route path='/homepage/update_records' element={<Updating />}/>
        <Route path='/homepage/search_record' element={<Search />}/>
      </Routes>
    </Router>
  );
}

export default App;
