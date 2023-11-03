import "./Footer.scss";

const Footer = () => {
    return (
        <div>
            <div className="links">
                <div className="logo">Feyman</div>
                <div className="contact">
                    <h3>CONTACT</h3>
                    <span>P.NO. - +91 9649061610</span>
                    <span>Email - xnxxx</span>
                    <div className="icons">
                        <span>In</span>
                        <span>Ig</span>
                        <span>Ti</span>
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <span>
                        <a href="">HOME</a>
                    </span>
                    <span>
                        <a href="">PRICING</a>
                    </span>
                    <span>
                        <a href="">PORTFOLIO</a>
                    </span>
                    <span>
                        <a href="">ABOUT</a>
                    </span>
                </div>
            </div>
            <div className="copyright">&copy;2023 Feyman</div>
        </div>
    );
};

export default Footer;
