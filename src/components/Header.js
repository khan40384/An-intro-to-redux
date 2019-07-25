import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
	return(
		<div className = "ui secondary pointing menu">
		<Link to="/" className="item">
		Stream List
		</Link>
		<div className = "right menu">
		</div>
		<Link to="/streams/new" className="item">
		Stream Create
		</Link>
		<Link to="/streams/edit" className="item">
		Stream Edit
		</Link>
		<Link to="/streams/delete" className="item">
		Stream Delete
		</Link>
		<Link to="/streams/show" className="item">
		Stream Show
		</Link>
		<GoogleAuth/>
		</div>
	);
};

export default Header;