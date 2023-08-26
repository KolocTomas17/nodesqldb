import { Link, useNavigate } from "react-router-dom";



const BoxBook = (props) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log("provedeno");
  };

  const deleteBook = async () => {
    const res = fetch(`http://localhost:3000/book/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate(0);
  };

  const handleDelete = () => {
    deleteBook();
  };

  return (

    <div className="card-content">
      <div className="card">
        <div className="box">
          <Link to={`book/${props.id}`}>
            <div className="media">
              <div className="media-left">
                <figure className="image ">
                  <img src={props.image} alt="Image" className="img" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>{props.name}</h4>
                  <h5>{props.author}</h5>
                  <p>Vydavatel {props.publisher}</p>
                  <p>Jazyk {props.language}</p>
                  <p className="is-size-6">Cena {props.price} Kč</p>
                  <a className="button" href={props.url} target="_blank">
            Zaplatit
          </a>
                </div>
              </div>
              <br />
            </div>
          </Link>
        </div>
       
      </div>
    </div>
    

    
  );
  
};



export default BoxBook;
