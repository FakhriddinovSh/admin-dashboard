import { NavOverview } from '../../Assets/Images/icons/icons';
import { NavTicket } from '../../Assets/Images/icons/icons';
import { NavIdeas } from '../../Assets/Images/icons/icons';
import { NavContacts } from '../../Assets/Images/icons/icons';
import { NavAgents } from '../../Assets/Images/icons/icons';
import { NavArticles } from '../../Assets/Images/icons/icons';
import { NavSettings } from '../../Assets/Images/icons/icons';
import { NavSubscription } from '../../Assets/Images/icons/icons';
import { ShItem } from '../Sh-nav-item/Sh-nav-item';

export const ShList = () => {
	const ItemImages = [
		{
			image: <NavOverview />,
			text: 'Overview',
		},
		{
			image: <NavTicket />,
			text: 'Tickets',
		},
		{
			image: <NavIdeas />,
			text: 'Ideas',
		},
		{
			image: <NavContacts />,
			text: 'Contacts',
		},
		{
			image: <NavAgents />,
			text: 'Agents',
		},
		{
			image: <NavArticles />,
			text: 'Articles',
		},
		{
			image: <NavSettings />,
			text: 'Settings',
		},
		{
			image: <NavSubscription />,
			text: 'Subscription',
		},
	];
	return (
		<ul className="list-unstyled">
			{ItemImages.map((item) => (
				<ShItem key={item.text} image={item.image} text={item.text} />
			))}
		</ul>
	);
};
