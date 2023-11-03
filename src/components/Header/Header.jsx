import "./Header.scss";
const Header = () => {
    return (
        <div className="body">
            <header class="header">
                <nav class="navb">
                    <div class="navbar">
                        <div class="nav-logo">Feyman</div>
                        <div class="nav-links">
                            <div class="nav-links-options">
                                <ul>
                                    <li>
                                        <a class="atag" href="">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a class="atag" href="">
                                            Portfolio
                                        </a>
                                    </li>
                                    <li>
                                        <a class="atag" href="">
                                            Services
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="nav-links-letstalk">Let's Talk</div>
                        </div>
                        <div className="hamburger">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
