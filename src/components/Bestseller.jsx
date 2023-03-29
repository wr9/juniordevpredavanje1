import chocolate from "../assets/chocolate.png";

const Bestseller = () => {
  return (
    <div className="bestsellerItem">
      <div className="bestsellerCard">
        <div className="bestsellerChip">Bestseller</div>
        <img src={chocolate} className="bestsellerImage" />
      </div>
      <div className="bestsellerItemName">Čokolada</div>
      <div className="bestsellerItemPrice">100 €</div>
    </div>
  );
};

export default Bestseller;
