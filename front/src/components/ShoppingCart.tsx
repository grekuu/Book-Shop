import { useContext } from "react";
import Context from "../context/Context";
import "./homePage.css";
import { NavLink } from "react-router-dom";

function ShoppingCart() {
  const { cart, setCart } = useContext(Context);

  function handleDelete(id: number) {
    const newArray = cart.filter((book: any) => book.id !== id);
    setCart(newArray);
  }

  return (
    <div>
      <div className="img-grid">
        {cart.map((book: any) => {
          return (
            <div key={book.id} className="singleBook">
              <img src={book.cover_url} alt={book.title} className="images" />
              <h2>{book.title}</h2>
              <p className="underline">
                <b>Authors:</b> {book.author}
              </p>
              <p>
                <b>Pages:</b> {book.pages}
              </p>
              <p>
                <b>Price:</b> {book.price} {book.currency}
              </p>
              <button
                onClick={() => {
                  handleDelete(book.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <NavLink to="/order">
        <button className="nextBtn">Next</button>
      </NavLink>
    </div>
  );
}

export default ShoppingCart;
