import { useState, useEffect } from "react";
import BoxBook from "./BoxBook";


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
    <div className="cards">
      {/*<Link to="create">
        <button className="button crud is-success">Vytvořit uživatele</button>
      </Link>
      {users.result.map((user) => (
        <Box id={user.id} name={user.name} age={user.age} image={user.image} />
      ))}
      */}

      {books.result.map((book) => (
        <BoxBook
          className="box"
          id={book.id}
          name={book.name}
          publisher={book.publisher}
          author={book.author}
          price={book.price}
          language={book.language}
          image={book.image}
          api={book.api}
          url={book.url}
        />
      ))}
    </div>
    
  );
};

export default Content;
