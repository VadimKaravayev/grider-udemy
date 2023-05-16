import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector((state) => {
    const { data, searchTerm } = state.cars;
    return data.reduce((result, { name, cost }) => {
      const carName = name.toLowerCase();
      const term = searchTerm.toLowerCase();
      const theCost = carName.includes(term) ? cost : 0;

      return result + theCost;
    }, 0);
  });
  return <div className="car-value ">Total Cost: ${totalCost}</div>;
}

export default CarValue;
