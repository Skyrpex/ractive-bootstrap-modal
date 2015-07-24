# Ractive Component Bootstrap Modal

Modal component for Ractive that uses Twitter Bootstrap's CSS.

## Requirements

* Use ```bootstrap```'s stylesheets.

## Modal properties

These are the default modal properties:

```javascript
{
  visible: false,
  transitionDuration: 100,
  zIndex: 0
}
```

## Usage

### app.js

```js
export default Ractive.extend({
  template: require('./app.hbs'),
  components: {
    Modal: require('ractive-bootstrap-modal')
  },
  data() {
    return {
      showModal: false
    }
  }
});
```

### app.hbs

```mustache
<div class="container">

  <h1>Ractive Bootstrap Modal</h1>

  <button type="button" class="btn btn-primary" on-click="toggle('showModal')">Show modal</button>

  <!-- Modal component -->
  <Modal visible="{{showModal}}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" on-click="toggle('showModal')" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div class="modal-body">
          <p>One fine body&hellip;</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" on-click="toggle('showModal')">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </Modal>

</div>

```
