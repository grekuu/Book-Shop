type CardProps = {
  id: number;
  title: string;
  cover_url: string;
  author: string;
  pages: number;
  price: number;
  currency: string;
  handleClick: any;
};

const Card = ({
  id,
  title,
  cover_url,
  author,
  pages,
  price,
  currency,
  handleClick,
}: CardProps) => {
  const item = { id, title, cover_url, author, pages, price, currency };

  return (
    <div key={id} className="singleBook">
      <img src={cover_url} alt={title} className="images" />
      <h2>{title}</h2>
      <p className="underline">
        <b>Authors:</b> {author}
      </p>
      <p>
        <b>Pages:</b> {pages}
      </p>
      <p>
        <b>Price:</b> {price} {currency}
      </p>
      <button onClick={() => handleClick(item)}>Add to cart</button>
    </div>
  );
};

export default Card;
