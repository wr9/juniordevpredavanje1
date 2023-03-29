import Header from "./components/Header";
import Cover from "./components/Cover";
import Bestseller from "./components/Bestseller";
import Perk from "./components/Perk";
import Footer from "./components/Footer";
import chocolate from "./assets/chocolate.png";
import perkGood from "./assets/perkGood.png";
import perkTasty from "./assets/perkTasty.png";
import perkChocolate from "./assets/perkChocolate.png";

const ChocolateShop = () => {
  return (
    <div>
      <Header />
      <Cover />
      <div className="bestsellersSection">
        <div className="bestsellersTitle">Bestselleri</div>
        <div className="bestsellersRow">
          <Bestseller />
          <Bestseller />
          <Bestseller />
          <Bestseller />
        </div>
        <div className="bestsellersButton">Kupi sve</div>
      </div>
      <div>
        <div className="highlightRow">
          <div className="highlightItem">
            <div>
              <img src={chocolate} className="highlightImage" />
              <div className="highlightItemName">Čokolada</div>
              <div className="highlightItemPrice">100 €</div>
            </div>
          </div>
          <div className="decoration decorationCupcake" />
        </div>
        <div className="highlightRow">
          <div className="decoration decorationCake" />
          <div className="highlightItem">
            <div>
              <img src={chocolate} className="highlightImage" />
              <div className="highlightItemName">Čokolada</div>
              <div className="highlightItemPrice">100 €</div>
            </div>
          </div>
        </div>
      </div>
      <div className="perksSection">
        <Perk imageSrc={perkGood} title="Predobro" />
        <Perk imageSrc={perkTasty} title="Preukusno" />
        <Perk imageSrc={perkChocolate} title="Čokoladno" />
      </div>
      <Footer />
    </div>
  );
};

export default ChocolateShop;
