import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector((state) => {
    const predicateFactory = (x) => (y) =>
      y.toLowerCase().includes(x.toLowerCase());
    const { searchTerm, data } = state.cars;
    const filterCars = predicateFactory(searchTerm);

    const filteredCars = data.filter((car) => filterCars(car.name));
    return {
      cars: filteredCars,
      name: state.form.name,
    };
  });

  const handleDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
