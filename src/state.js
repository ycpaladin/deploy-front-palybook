import { observable, action } from 'mobx';

const appState = observable({
  id: 1,
  name: 'kevin',
  updateName: action(function() {
    // console.log(this)
    this.name = 'ccw';;
  })
});

export default appState;
