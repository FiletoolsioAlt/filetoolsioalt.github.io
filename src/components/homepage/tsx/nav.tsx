import '../css/nav.css';
import Advertise from './advertise.tsx';
import Pricing from './pricing.tsx';
import Logo from './logo.tsx';
import SearchBar from './searchBar.tsx';
import Login from './login.tsx';
import Signup from './signup.tsx';

function Nav() {
        return (
            <>
               <nav className='navbar'>
                        <Logo />
                        <Pricing />
                        <Advertise />
                        <SearchBar />
                        <Login />
                        <Signup />
                        <hr />
                </nav>
            </>
        );
     }
     
export default Nav;
     