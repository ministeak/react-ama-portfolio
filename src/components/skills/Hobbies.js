import React from 'react';

const Hobbies = () => {
	return (
		<div class="hobbies">
			<h3>Intérêts</h3>
			<ul>
				<li className="hobby">
					<i className="fas fa-bicycle"></i>
					<span>VTT</span>
				</li>
				<li className="hobby">
					<i className="fas fa-globe"></i>
					<span>Web developpment</span>
				</li>
				<li className="hobby">
					<i className="fas fa-gamepad"></i>
					<span>Game developpement (Unity)</span>
				</li>
				<li className="hobby">
					<i className="fas fa-chess"></i>
					<span>Jeux de stratégie</span>
				</li>
			</ul>
		</div>
	);
};

export default Hobbies;