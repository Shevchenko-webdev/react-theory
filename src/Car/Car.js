import React, {Component} from "react";
import Radium from 'radium';
import './Car.scss';

class Car extends Component {

  // static getDerivedStateFromProps(props, state) {
  //   console.group('getDerivedStateFromProps');
  //   console.log(props);
  //   console.log(state);
  //   console.groupEnd();
  //   return state;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.group('getSnapshotBeforeUpdate');
  //   console.log(prevProps);
  //   console.log(prevState);
  //   console.groupEnd();
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.group('shouldComponentUpdate');
    // console.log(nextProps);
    // console.log(nextState);
    // console.log(nextContext);
    // console.groupEnd();
    // return nextProps.name.trim() !== this.props.name.trim();
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
    // console.group('componentDidUpdate');
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
    // console.groupEnd();
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  render() {
    const inputClasses = ['input'];

    this.props.name !== '' ? inputClasses.push('green') : inputClasses.push('red');
    if (this.props.name.length > 4) inputClasses.push('bold');

    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
      borderRadius: '5px',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
      }
    }

    return (
      <div className='Car' style={style}>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Radium(Car);