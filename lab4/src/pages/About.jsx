import { Link, Outlet, useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();

    return <div>
        {location.pathname === '/about' && (
            <>
                <h1>About Us</h1>
                <p>This is the About page. Learn more about our team below:</p>
                <Link to="team" className="btn">Go to our Team</Link>
            </>
        )}
        <Outlet />
    </div>
}

export default About;