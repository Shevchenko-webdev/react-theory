import React, {Component} from "react";
import withClass from "../hoc/withClass";
import PropTypes from 'prop-types'
import classes from './Car.module.scss';

class Car extends Component {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const inputClasses = [classes.input];

    this.props.name !== '' ? inputClasses.push(classes.green) : inputClasses.push(classes.red);
    if (this.props.name.length > 4) inputClasses.push(classes.bold);

    return (
      <>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    )
  }
}

Car.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  year: PropTypes.number,
  onDelete: PropTypes.func,
  onChangeName: PropTypes.func,
}

export default withClass(Car, classes.Car);