// import { ShItem } from '../Sh-nav-item/Sh-nav-item';
import { Dashboard } from '../../Assets/Images/icons/icons';
import '../Sh-logo/Sh-logo.css';

export const ShLogo = () => {
	const icons = [
		{
			image: <Dashboard />,
			text: 'Dashboard Kit',
		},
	];

	return icons.map((item) => (
		<div className="d-flex logo-top align-items-center">
			<div>{item.image}</div> <p className="logo-top-desc">{item.text}</p>
		</div>
	));
};
