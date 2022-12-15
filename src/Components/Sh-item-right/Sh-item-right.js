import './Sh-item-right.css';

export const ItemRight = ({ theme, count }) => {
	return (
		<li className="itemRight">
			<p className="itemRightTheme">{theme}</p>
			<p className="itemRightCount">{count}</p>
		</li>
	);
};
