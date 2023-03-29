import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <div className="nav">
        <div className="navItem">Trgovina</div>
        <div className="navItem">Kakao</div>
        <div className="navItem">Torte</div>
        <div className="navItem">O nama</div>
        <div className="navItem">Kontakt</div>
      </div>
    </div>
  );
};

export default Header;
