import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import BoxBook from "./BoxBook";
import Header from "./Header";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
  };

  const getBooks = async () => {
    const res = await fetch("http://localhost:3000/book", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBooks(data);
    setLoaded(true);
  };

  useEffect(() => {
    getUsers();
    getBooks();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Users and Books are loading...</p>
      </>
    );
  }
  return (
    <>
    
     { /*<Link to="create">
        <button className="button crud is-success">Vytvořit uživatele</button>
      </Link>
      {users.result.map((user) => (
        <Box id={user.id} name={user.name} age={user.age} image={user.image} />
      ))}
      */ }

      {books.result.map((book) => (
        <BoxBook  id={book.id} name={book.name} publisher={book.publisher} author={book.author} price={book.price} language={book.language} image={book.image} />
        
      ))}
    </>
  );
};

export default Content;
