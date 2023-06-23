import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";


function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/service" element={<Service/>}></Route>
            
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default App;