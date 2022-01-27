import "./index.css";
function Header() {
  return (
    <div className="header">
      <div className="sub-header">
        <div className="logo-wrapper">
          <img className="logo" src="https://idexinnovation.com/static/media/logo.7cc50008.png" alt="main logo" />
        </div>

        <div className="sub-header-A">
          <div className="navbar">
            <a href="#">home</a>
            <a href="#">
              <span>features</span>
              <span><i className="fa fa-angle-down"></i></span>
            </a>
            <a href="#">blog</a>
            <a href="#">pricing</a>
          </div>

          <div className="language-select">
            <img className="language-icon" src="./image/ukFlag.png" alt="british english flag" />
            <span>english</span>
            <span>
              <i className="fa fa-caret-down"></i>
            </span>
          </div>

          <div className="free-btn">
            <a href="">try it for free</a>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Header;
