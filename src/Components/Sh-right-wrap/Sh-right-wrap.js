import { ShHeader } from '../Sh-header/Sh-header';
import { HeaderListRight } from '../Sh-cards/Sh-cards';
import './Sh-right-wrapper.css';

export const RightWrapper = () => {
	return (
		<div className="rightWrapper">
			<ShHeader />
			<HeaderListRight />
		</div>
	);
};
