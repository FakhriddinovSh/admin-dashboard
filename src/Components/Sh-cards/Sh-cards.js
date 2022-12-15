import { ItemRight } from '../Sh-item-right/Sh-item-right';
import Abox from '../A-box/A-box';

export const HeaderListRight = () => {
	const datas = [
		{
			theme: 'Unresolved',
			count: 60,
		},
		{
			theme: 'Overdue',
			count: 16,
		},
		{
			theme: 'Open',
			count: 43,
		},
		{
			theme: 'On hold',
			count: 64,
		},
	];

	return (
		<>
			<ul className="list-unstyled d-flex justify-content-between text-center">
				{datas.map((item) => (
					<ItemRight theme={item.theme} count={item.count} />
				))}
			</ul>
			<Abox />
		</>
	);
};
