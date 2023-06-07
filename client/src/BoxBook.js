import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BoxBook = (props) => {
  const navigate = useNavigate();

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
    <div className="container">
      <div className="columns">
        <Link to={`book/${props.id}`}>
          <div className="box">
            <div className="media">
              <div className="media-left">
                <figure className="image ">
                  <img src={props.image} alt="Image" className="img"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h4>{props.name}</h4>
                  <h5>{props.author}</h5>
                  <p>Vydavatel {props.publisher}</p>
                  <p>Jazyk {props.language}</p>
                  
                  
                  
                
                </div>
              </div>
              <br/>
              <div className="media-right">
                <Link to="/kosik">
                <button type="submit" class="button" name="add">
                    Koupit<FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#43485C" }}
              />
                  </button>
                  
                </Link>
                <p className="is-size-6">Cena {props.price} Kč</p>
              </div>
              
                
                
              
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoxBook;
