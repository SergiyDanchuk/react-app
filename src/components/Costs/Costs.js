import { CostItem } from './CostItem';
import { Card } from '../UI/Card';
import { CostsFilter } from '../CostsFilter/CostsFilter';
import './Costs.css'
import { useState } from 'react';

const Costs = (props) => {
  const [year, setYear] = useState('2020');
  const { costsItems } = props;
  const costFilterChangeHandler = (year) => {
    setYear(year);
  }

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={costFilterChangeHandler} year={year} />
      {
        costsItems.map((cost, index) =>
          <CostItem key={index} date={cost.date} description={cost.description} amount={cost.amount} />
        )
      }
    </Card>
  )
}

export { Costs }