import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

	return (
		<div className="sidebar">
			<div className="id">
				<div className="idContent">
					<img src="./media/pp.jpg" alt="profil-pic" width="170" />
					<h3>Alexis MATHERON</h3>
				</div>
			</div>

			<div className="navigation">
				<ul>
					<li>
						<NavLink exact to="/" activeClassName="navActive">
							<i className="fas fa-home"></i>
							<span>Accueil</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/competences" activeClassName="navActive">
							<i className="fas fa-mountain"></i>
							<span>Compétences</span>
						</NavLink>
					</li>
					<li>
						<NavLink exact to="/contact" activeClassName="navActive">
							<i className="fas fa-address-book"></i>
							<span>Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="socialNetwork">
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/alexis-matheron-5689b1219/" >
							<i className="fab fa-linkedin" />
						</a>
					</li>
					<li>
						<a href="https://github.com/ministeak">
							<i className="fab fa-github" />
						</a>
					</li>
					<li>
						<a href="https://gitlab.com/Ministeak" >
							<i className="fab fa-gitlab" />
						</a>
					</li>
				</ul>
			</div>

		</div>
	);
};

export default Navigation;