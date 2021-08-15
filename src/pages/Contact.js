import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
	return (
		<div className="contact">
			<Navigation />
			<div className="contactContent">
				<div className="header"></div>
				<div className="contactBox">
					<h1>Contactez-moi !</h1>
					<ul>
						<li>
							<i className="fas fa-map-marker-alt"></i>
							<span>Mobile dans le sud de la France</span>
						</li>
						<li>
							<i className="fas fa-mobile-alt"></i>
							<CopyToClipboard text="0689900689">
								<span className="clickInput" onClick={() => { alert("Téléphone copié !"); }}>06 89 90 06 80 </span>
							</CopyToClipboard>
						</li>
						<li>
							<i className="far fa-envelope"></i>
							<CopyToClipboard text="matheron.alexis30@gmail.com">
								<span className="clickInput" onClick={() => { alert("Mail copié !"); }}>matheron.alexis30@gmail.com </span>
							</CopyToClipboard>
						</li>
					</ul>
				</div>
				<div className="socialNetwork">
					<ul>
						<a href="https://www.linkedin.com/in/alexis-matheron-5689b1219/">
							<h4>Linkedin</h4>
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://gitlab.com/Ministeak">
							<h4>Gitlab</h4>
							<i className="fab fa-gitlab"></i>
						</a>
						<a href="https://github.com/ministeak">
							<h4>Github</h4>
							<i className="fab fa-github"></i>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;