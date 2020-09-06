import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import About from '../pages/About';


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
    }
]

export default routes