import "./index.css";

function Footer(){
    return(
        <div className="footer-container">

            <div className="footerA">

                <div className="footerAA">       
                    <div className="footerAA1">
                        <div className="footerAA11">
                            <p>Product</p>
                            <div className="footer-links">
                                <a href="">Project Management</a>
                                <a href="">Idea & Innovation Management</a>
                                <a href="">Pricing</a>
                            </div>
                        </div>
                        <div className="footerAA11">
                            <p>Company</p>
                            <div className="footer-links">
                                <a href="">Blog</a>
                                <a href="">About Us</a>
                                <a href="">Terms and Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div className="footerAA2">
                        <img src="https://idexinnovation.com/static/media/logo.6526821e.png" alt="footer logo" />
                        <div>
                            <p className="footer-logo-name">IDEX INNOVATION</p>
                            <p className="footer-logo-website">info@idexltd.com</p>
                        </div>
                    </div>
                    <div className="footerAA3">
                        <p>Turn ideas into innovations</p>
                        <div>Start collecting ideas for the next big thing and implement them in your organization now!</div>
                        <a href="">
                            <button>GET STARTED!</button>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footerB">
                <div>
                    © 2022 - IDEX | Jouster FZE
                </div>
            </div>

        </div>
    );
}

export default Footer;