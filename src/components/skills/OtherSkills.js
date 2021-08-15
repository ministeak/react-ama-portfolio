import React from 'react';

const OtherSkills = () => {
	return (
		<div className="otherSkills">
			<h3>Autres compétences</h3>
			<div className="list">
				<ul>
					<li><i className="fas fa-check-square"></i>Gestion de versions (GIT, SVN)</li>
					<li><i className="fas fa-check-square"></i>CI/CD</li>
					<li><i className="fas fa-check-square"></i>Docker</li>
					<li><i className="fas fa-check-square"></i>Scripting(bash, shell)</li>
				</ul>
				<ul>
					<li><i className="fas fa-check-square"></i>SQL, NOSQL</li>
					<li><i className="fas fa-check-square"></i>BDD(PostgreSQL, Oracle, MySQL, SQL Server, MongoDB, MongoDB Atlas</li>
					<li><i className="fas fa-check-square"></i>Scrum, Kanban</li>
					<li><i className="fas fa-check-square"></i>Anglais courant</li>
				</ul>
			</div>
		</div>
	);
};

export default OtherSkills;