import { Link } from "react-router-dom";
import baseEstelarUrl from "../assets/img/baseEstelar.png"
import favoritosUrl from "../assets/img/favoritos.png"

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light ">
			
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 "> <img className= 'navbarHome' src={baseEstelarUrl} alt="Base estelar"/></span>
				</Link>
				<div className="ml-auto">
					<Link to="/favoritos">
					<span className="navbar-brand mb-0 h1 ">  <img className= 'navbarHome2' src={favoritosUrl} alt="Base estelar"/></span>
					</Link>
				</div>
			</div>
		</nav>
	);
};