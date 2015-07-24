// import $ from 'jquery';
import Ractive from 'ractive';

// import isBodyOverflowing from '../isBodyOverflowing';
// import measureScrollbar from '../measureScrollbar';

const OUTER_WRAPPER_CSS = { position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 };

export default Ractive.extend({
	template: require('./index.hbs'),
  isolated: true,
  transitions: {
    fade: require('ractive-transitions-fade')
  },
	data() {
		return {
			visible: false,
			transitionDuration: 100,
			zIndex: 0
		}
	},
	oninit() {
		// Listen to backdrop click.
		this.on('backdrop', e => {
			const { clientX, clientY } = e.original;
			const backdrop = this.find('.modal');
      if (document.elementFromPoint(clientX, clientY) === backdrop) {
				this.hide();
				return false;
			}
		});
	},
	hide() {
		// Skip if not visible.
		if (!this.get('visible')) return;

		// Hide.
		this.set('visible', false);

		// // Take care of body overflow.
		// $(document.body).css('overflow', this._overflow);
		// $(document.body).css('paddingRight', this._paddingRight);
	},
	show() {
		// Skip if visible.
		if (this.get('visible')) return;

		// // Take care of host body overflow.
		// this._overflow = $(document.body).css('overflow') || 'visible';
		// this._paddingRight = document.body.style.paddingRight || '';
		// if (isBodyOverflowing()) {
		// 	let bodyPadding = parseInt((this._paddingRight || 0), 10)
		// 	let scrollbarWidth = measureScrollbar();
		// 	$(document.body).css('paddingRight', `${bodyPadding + scrollbarWidth}px`);
		// }
		// $(document.body).css('overflow', 'hidden');

		// Show.
		this.set('visible', true);

		// Scroll modal to the top.
		// $(this.innerWrapper).find('.modal.fade:first').scrollTop(0);

		// let modalIsOverflowing = this.innerWrapper.scrollHeight > document.documentElement.clientHeight;
		// console.log(modalIsOverflowing);
	}
});
