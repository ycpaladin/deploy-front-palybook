import React from 'react';
import { observer } from 'mobx-react';

@observer
class Demo01 extends React.Component {

  handleClick = () => {
    this.props.user.updateName();
  }

  render() {
    const { user:{name}  } = this.props;
    return (<button onClick={this.handleClick}>{ name }</button>)
  }
}

export default Demo01;
