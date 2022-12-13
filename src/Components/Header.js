import { Link } from 'react-router-dom';

const Header = (props) => {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '15px',
        margin: 'auto',
    };

    return (
        <header>
            <h1>Tyler Hoffman's Portfolio</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>Home</div>
                </Link>
                <Link to="/about">
                    <div>About</div>
                </Link>
                <Link to="/projects">
                    <div>Projects</div>
                </Link>
            </nav>
        </header>
    );
}

export default Header;