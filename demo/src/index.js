import Ractive from 'ractive';

new Ractive({
  template: require('ractive!./index.hbs'),
  el: '.container',
  append: true,
  components: {
    Modal: require('../../lib'),
  },
  data() {
    return {
      // Will use this to show/hide the modal
      showModal: false,
    };
  },
});
