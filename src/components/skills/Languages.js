import React, { Component } from 'react';
import ProgressBarComp from './ProgressBarComp';

class Languages extends Component {

	state = {
		languages: [
			{ id: 1, value: "Java", xp: 4 },
			{ id: 2, value: "C#", xp: 1 },
			{ id: 3, value: "Javascript", xp: 1.5 },
			{ id: 4, value: "C++", xp: 1 },
		],

		frameworks: [
			{ id: 1, value: "JSF/Hibernate", xp: 3 },
			{ id: 2, value: "JSP", xp: 3 },
			{ id: 5, value: "React JS", xp: 1 },
			{ id: 6, value: "Angular", xp: 1 },
		]
	}

	render() {
		let { languages, frameworks } = this.state;
		return (
			<div className="languagesFrameworks">
				<ProgressBarComp languages={languages} className="languagesDisplay" title="languages" />
				<ProgressBarComp languages={frameworks} className="frameworksDisplay" title="frameworks" ></ProgressBarComp>
			</div>
		);
	}
}

export default Languages;