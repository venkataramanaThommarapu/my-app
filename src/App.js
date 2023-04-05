import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import './App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Sass from './Pages/Sass';
import Sass2 from './Pages/Sass2';
import Form from './Pages/Form';
import Temparature from './Pages/Temparature';


function App() {
  return (
   <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="sass" element={<Sass />}/>
            <Route path="sass2" element={<Sass2 />}/>
            <Route path="Form" element={<Form />}/>
            <Route path="Temparature" element={<Temparature />}/>
          </Route>
        </Routes>
      </BrowserRouter>
   

   </>
  );
}

export default App;
