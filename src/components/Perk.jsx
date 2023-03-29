const Perk = ({ imageSrc, title }) => {
  return (
    <div className="perk">
      <img src={imageSrc} className="perkImage" />
      <div className="perkFilter" />
      <div className="perkTitle">{title}</div>
    </div>
  );
};

export default Perk;
