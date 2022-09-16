import React from "react";
import { useState } from "react";
import axios from "axios";
import "./order.css";
import { useContext } from "react";
import Context from "../context/Context";

type defaultForm = {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
  order: any;
};

const defaultFormData: defaultForm = {
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
  order: [],
};

function OrderPage() {
  const url = "http://localhost:3001/api/order";
  //eslint-disable-next-line
  const { cart, setCart } = useContext(Context);
  //eslint-disable-next-line
  const [quantity, setQuantity] = useState(0);

  const [formData, setFormData] = useState(defaultFormData);
  const { first_name, last_name, city, zip_code, order } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const orderArray = {
      id: cart.map((book: any) => {
        return book.id;
      }),
      quantity: cart.length,
    };

    order.push(orderArray);

    setFormData(defaultFormData);

    try {
      const resp = await axios.post(url, {
        first_name: first_name,
        last_name: last_name,
        city: city,
        zip_code: zip_code,
        order: orderArray,
      });
      console.log(resp.data);
    } catch (error) {}
  };

  return (
    <div className="orderContainer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="first_name"
          value={first_name}
          onChange={onChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          id="last_name"
          value={last_name}
          onChange={onChange}
          placeholder="Last Name"
        />
        <br />
        <input
          type="text"
          id="city"
          value={city}
          onChange={onChange}
          placeholder="City"
        />
        <br />
        <input
          type="text"
          id="zip_code"
          value={zip_code}
          onChange={onChange}
          placeholder="Zip-code (xx-xxx)"
        />
        <br />
        <br />
        <button type="submit">I ORDER AND PAY</button>
      </form>
    </div>
  );
}

export default OrderPage;
