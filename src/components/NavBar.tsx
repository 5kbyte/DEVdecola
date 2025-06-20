import Styles from "./NavBar.module.css";

export const NavBar = () => {

    return (

        <nav className={Styles.navbar}>
            <div className={Styles.navbar__logo}>
                <img src="/logo.png" alt="Logo" />
            </div>
            
            <ul className={Styles.navbar__links}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}