import { useState } from "react";
import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2020, 1, 13),
    description: 'Холодильник2',
    amount: 997.99
  },
  {
    id: 'c3',
    date: new Date(2023, 3, 22),
    description: 'Холодильник3',
    amount: 996.99
  }
];

const App = () => {
  const [costs, setNewCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setNewCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costsItems={costs} />
    </div>
  );
}

export { App };