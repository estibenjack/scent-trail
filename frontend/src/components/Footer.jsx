const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>Coded by Steven Jackson © {currentYear} </p>
    </div>
  );
};

export default Footer;
