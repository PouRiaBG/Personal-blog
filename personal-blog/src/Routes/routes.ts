import Home from '../pages/Home/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';


const routes = [
    {
        exact : true,
        path : "/",
        components : Home
    },
    {
        path : "/blog",
        components : Blog
    },
    {
        path : "/about-us",
        components : About
    },
    {
        path : "/contact-us",
        components : Contact
    },
    {
        path: "/login",
        components : Login
    }
]

export default routes