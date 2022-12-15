import './App.css';

import { NavigationWrapper } from './Components/Sh-nav-wrapper/sh-nav-wrapper';
import { RightWrapper } from './Components/Sh-right-wrap/Sh-right-wrap';

function App() {
	return (
		<div className="d-flex my-container">
			<NavigationWrapper />
			<RightWrapper />
		</div>
	);
}

export default App;
