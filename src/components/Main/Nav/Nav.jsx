import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to='/profiles'>My page</NavLink>
			<NavLink to='/dialogs'>Dialogs</NavLink>
			<NavLink to='/videos'>Videos</NavLink>
			{/* <a href="/profiles">My page</a>
			<a href="/messages">Dialogs</a>
			<a href="/videos">Videos</a>
			<a href="#">Link</a> */}
		</nav>
	)
}

export default Nav;