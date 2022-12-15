import { ShLogo } from '../Sh-logo/Sh-logo';
import { ShNav } from '../Sh-nav/Sh-nav';
import '../Sh-nav-wrapper/Sh-nav-wrapper.css';

export const NavigationWrapper = () => {
	return (
		<div className="navigation-bg">
			<ShLogo />
			<ShNav />
		</div>
	);
};
