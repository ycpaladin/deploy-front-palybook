import React from 'react';

const TextInput = React.forwardRef(({text, onChange, ...rest}, ref) => (<div {...rest}>
  <input type='text' placeholder='Hello forwardRef' ref={ref} value={text} onChange={onChange} />
</div>))

export class Demo02 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("input value is:" + this.inputRef.current.value);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState)

  // componentWillMount() {

  // }

  // static getD
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState)
    return {
      text: 'x'
    }
  }

  onChange = ({ target: { value: text }}) => {
    // console.log(e);
    this.setState({
      text
    });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput ref={this.inputRef} style={{ backgroundColor: 'red' }} value={text} onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }

}
