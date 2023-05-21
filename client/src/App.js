import "./App.css";
import Header from "./Header";
import Content from "./Content";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Book from "./components/Book";
import CreateUser from "./components/CreateUser";
import CreateBook from "./components/CreateBook";
import Error from "./components/Error";
import UpdateUser from "./components/UpdateUser";
import UpdateBook from "./components/UpdateBook";
import Body from "./body";

/**
 * TODO List
 * 1. Setup react router ✅
 * 2. Single user page ✅
 * 3. Create repo ✅
 */
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
        <Route path='book/:id' element={<Book />} />
        <Route path='createBook' element={<CreateBook />} />
        <Route path='update-book/:id' element={<UpdateBook />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
