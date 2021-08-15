import React from 'react';

const ProgressBarComp = (props) => {
	console.log(props)
	return (
		<div className={props.className}>
			<h3>{props.title}</h3>
			<div className="years">
				<span>Années d'expérience</span>
				<span>2 ans</span>
				<span>4 ans</span>
			</div>

			<div>
				{
					props.languages.map((item) => {
						let xpYears = 5;
						let progressbar = item.xp / xpYears * 100 + "%";
						return (
							<div key={item.id} className="languagesList">
								<li>{item.value}</li>
								<div className="progressBar" style={{ width: progressbar }} />
							</div>
						)
					})
				}
			</div>

		</div>
	);
};

export default ProgressBarComp;