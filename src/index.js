import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

class FirstApplicationWebComponent extends HTMLElement {
	connectedCallback() {
		ReactDOM.render(
			<App />,
			this
		);
	}
}

const ELEMENT_ID = 'liferay-first-application';

if (!customElements.get(ELEMENT_ID)) {
	customElements.define(ELEMENT_ID, FirstApplicationWebComponent);
}