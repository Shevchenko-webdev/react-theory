import React, {Component} from "react";
import './App.scss';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: [
        {name: 'Ford', year: '2018'},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010},
      ],
      pageTitle: 'React components',
      showCars: false,
      clicker: false
    }
  }

  toggleCarsHandle = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    // const cars = this.state.cars.concat();
    const cars = [...this.state.cars]
    cars[index] = car;
    this.setState({cars});
  }

  deleteHandler = (index) => {
    const cars = [...this.state.cars];
    cars.splice(index, 1);

    this.setState({cars});
  }

  render() {

    return (
      <div className="App">
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <div className="Counter">
            <Counter />
          </div>
        </ClickedContext.Provider>
        <button
          onClick={this.toggleCarsHandle}
        >Toggle cars
        </button>

        <button onClick={() => this.setState({clicked: true})}>Change clicked</button>

        {
          this.state.showCars
            ? this.state.cars.map((car, i) => {
              return (
                <ErrorBoundary key={i}>
                  <Car
                    index={i}
                    name={car.name}
                    year={car.year}
                    onDelete = {this.deleteHandler.bind(this, i)}
                    onChangeName={event => this.onChangeName(event.target.value, i)}
                  />
                </ErrorBoundary>
              )
            })
            : null
        }
      </div>
    );
  }
}

export default App;
