import "./App.css";

import Content from "./Content";
import { Routes, Route } from "react-router-dom";

import Book from "./components/Book";

import CreateBook from "./components/CreateBook";
import Error from "./components/Error";

import UpdateBook from "./components/UpdateBook";

import Body from "./body";


import Header from "./Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";






const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route exact index element={<Body />} />
        {
          /*
            :id značí, že si pomocí v komponentu User můžeme pomocí hooku useParams()
            vyjmout řetězec, který bude místo :id 
            to znamená, že vybereme přesně toho uživatele, na kterýho jsme kliknuli
          */
        }
       {/*<Route path='user/:id' element={<User />} />
        <Route path='create' element={<CreateUser />} />
      <Route path='update-user/:id' element={<UpdateUser />} />*/}
        <Route path='content' element={<Content />} />
        <Route path='content/book/:id' element={<Book />} />
        <Route path='createBook' element={<CreateBook />} />
        <Route path='update-book/:id' element={<UpdateBook />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer></Footer>
     
    </>
  );
};

export default App;
