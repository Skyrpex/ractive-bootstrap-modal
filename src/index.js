import Ractive from 'ractive';

export default Ractive.extend({
  template: require('fs').readFileSync(__dirname + '/index.hbs', 'utf8'),

  isolated: true,

  transitions: {
    fade: require('ractive-transitions-fade'),
    fly: require('ractive-transitions-fly'),
  },

  data() {
    return {
      show: false,
    };
  },

  oninit() {
    // Listen to backdrop click.
    this.on('backdrop', e => {
      const { clientX, clientY } = e.original;
      const backdrop = this.find('.modal');
      if (document.elementFromPoint(clientX, clientY) === backdrop) {
        this.set('show', false);
        return false;
      }
    });
  },
});
