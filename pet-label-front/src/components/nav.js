import "./nav.css";
const Nav = () => {
  return (
    <nav className="nav">
      <span className="logo">Label Reward</span>
      <div className="link">
        <a className="qr-camera-page" href="#">
          QR 찍기
        </a>
        <a className="qr-generate-page" href="#">
          QR 생성하기
        </a>
      </div>
    </nav>
  );
};

export default Nav;
