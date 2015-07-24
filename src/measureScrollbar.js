import $ from 'jquery';
import { once } from 'lodash';

export default once(function measureScrollbar() {

	const el = document.createElement('el');

	$(el).css({
		position: 'absolute',
		top: '-9999px',
		width: '50px',
		height: '50px',
		overflow: 'scroll'
	}).appendTo('body');

	const scrollbarWidth = el.offsetWidth - el.clientWidth;

	$(el).remove();

	return scrollbarWidth;

});
