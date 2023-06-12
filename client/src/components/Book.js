import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

import React from "react";

import "reactjs-popup/dist/index.css";
import StripeCheckout from "react-stripe-checkout";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  const handlePayment = async () => {
    console.log("provedeno");
  };

  const getBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBook(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBook();
    console.log(book.result);
  }, []);

  if (!loaded)
    return (
      <>
        <p>Loading book...</p>
      </>
    );

  return (
    <>
      <div className="card">
        <div class="card-image">
          <figure class="image">
            <img src={book.result[0].image} alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <h1 className="title is-3">{book.result[0].name} </h1>
              <p class="subtitle is-4">Autor {book.result[0].author}</p>
              <p class="subtitle is-5">
                Vydavatelství {book.result[0].publisher}
              </p>
              <p class="subtitle is-6">Cena {book.result[0].price} Kč</p>
              <p class="subtitle is-6">Jazyk {book.result[0].language}</p>

              <StripeCheckout
                stripeKey="pk_test_51NHT9DDr7G8AESVUzXcnVUiIXddNEQcZW6scZS0kC0c9mHPNitOxEmg1NB5r5Iu4jrZsIriU5mIMk5nlSylhBcTp00wWSJ1dnj"
                token={handlePayment}
                amount={book.result[0].price * 100}
                currency="CZK"
              >
                <button className="button" name="add" type="button">
                  Zaplatit
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
