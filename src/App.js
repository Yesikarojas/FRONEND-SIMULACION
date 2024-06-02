import { Route, Routes, BrowserRouter} from "react-router-dom";
import GetStudents from './Components/GetStudents'
import './Components/styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetStudents></GetStudents>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
