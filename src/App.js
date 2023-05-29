import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2023, 1, 13),
      description: 'Холодильник2',
      amount: 997.99
    },
    {
      date: new Date(2023, 3, 22),
      description: 'Холодильник3',
      amount: 996.99
    }
  ];

  return (
    <div>
      <NewCost />
      <Costs costsItems={costs} />
    </div>
  );
}

export { App };