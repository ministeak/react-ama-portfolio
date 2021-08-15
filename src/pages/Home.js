import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<div className="home">
			<Navigation />
			<div className="homeContent">
				<div className="content">
					<h1>Alexis MATHERON</h1>
					<h2>Développeur web, standalone et mobile</h2>
					<div className="pdf">
						<a href="./media/AlexisMatheron_CV.pdf" target="_blank">Télécharger le CV</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;