// import { useContext } from "react"
// import { CurrencyContext } from "../../context/currencyContext"
import { useNavigate } from 'react-router-dom';
import currencyStore from '../../store/store';

function NavBar() {

       // const { setCurrency } = useContext(CurrencyContext);

       const { setCurrency } = currencyStore();

       const navigate = useNavigate();

       function redirectToHome() {
              navigate('/');
       }

       return (
              <div className="navbar bg-base-100 shadow-sm">
                     <div className="navbar-start">
                            <div className="dropdown">
                                   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                                   </div>
                                   <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                          <li onClick={() => setCurrency('inr')}><a>INR</a></li>
                                          <li onClick={() => setCurrency('usd')}><a>USD</a></li>
                                   </ul>
                            </div>
                     </div>
                     <div onClick={redirectToHome} className="navbar-center">
                            <a className="btn btn-ghost text-xl">Crypto Tracker</a>
                     </div>

              </div>
       )
}

export default NavBar