import '../Sh-nav-item/sh-nav-item.css';

export const ShItem = ({ image, text }) => {
	return (
		<li key={text} className="list-unstyled list-item">
			<div>{image}</div>
			<p className="list-item-desc">{text}</p>
		</li>
	);
};
