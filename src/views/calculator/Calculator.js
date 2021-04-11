import React from "react";
import { CALCULATOR } from "../../app/redux/pageData";
import PageDescription from "../shared/PageDescription";
import InputGroup from "./InputGroup";
import Result from "./Result";
import { thousands } from "../../services/helpers";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../app/redux/globalComponent";

function Calculator() {
  const [foodCost, setFoodCost] = React.useState(10);
  const [employees, setEmployees] = React.useState(1);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(1));
  }, []);

  const sliders = [
    {
      description: "Monthly ingridient spending",
      min: 10,
      max: 100,
      state: [foodCost, setFoodCost],
      width: (value) => {
        if (value > 100) return "calc(100% - 11.1111px)";
        if (value < 10) return "0%";
        return `calc(${((value - 10) / 90) * 100}% - ${(value / 90) * 10}px)`;
      },
      resultLabel: "Estimated food cost savings",
      resultFormula: Math.round(foodCost * 0.3 * 100) / 100,
    },
    {
      description: "Full-time employees that process invoices",
      min: 1,
      max: 10,
      state: [employees, setEmployees],
      width: (value) => {
        value *= 10;
        if (value > 100) return "calc(100% - 11.1111px)";
        if (value < 10) return "0%";
        return `calc(${((value - 10) / 90) * 100}% - ${(value / 90) * 10}px)`;
      },
      resultLabel: "Your estimated annual savings",
      resultFormula: thousands(
        employees * 1337 + Math.round(foodCost * 0.3 * 100) / 100
      ),
    },
  ];

  return (
    <div className='page-body row'>
      <PageDescription page={CALCULATOR}></PageDescription>
      <div className='calculator'>
        {sliders.map((slider, i) => (
          <InputGroup
            key={i}
            description={slider.description}
            width={slider.width}
            min={slider.min}
            max={slider.max}
            state={slider.state}
          />
        ))}
        <div className='results'>
          {sliders.map((slider, i) => (
            <Result
              key={i}
              value={slider.resultFormula}
              label={slider.resultLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
