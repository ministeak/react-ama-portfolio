import React from 'react';

const Experience = () => {
	return (
		<div className="experience">
			<h3>Expériences</h3>
			<div className="exp-1">
				<h4>Ingénieur informatique, Soprabanking Software (Rodez)</h4>
				<h5>2020 - présent</h5>
				<p>
					<b>Industrialisation</b> : Création d’outils (applications standalones Java/J2EE), gestion d’environnements, participation à l’amélioration de la chaîne d’intégration continue.
					<br />
					<b>Intégration </b> : Développement de composants, paramétrage,  livraisons sur environnements clients, homologations techniques et fonctionnelles.
					<br />
					<b>Rédaction</b> : Documentation technique, analyse de l’existant, chiffrage d’évolutions
				</p>

			</div>
			<div className="exp-2">
				<h4>Ingénieur informatique en alternance, Soprabanking Software (Rodez)</h4>
				<h5>2017-2020</h5>
				<p>
					<b>Développement front-end </b> : Développement front-end en Java + Framework JSF, Primefaces, JSP. (ex: Réécriture du front-end d’une application dans le cadre d’un passage du framework JSP à JSF - Développement de composant JSF - Développement d’évolutions sur l’application. )
					<br />
					<b>Rédaction</b>: Documentation technique, analyse de l’existant
				</p>
			</div>
		</div >
	);
};

export default Experience;