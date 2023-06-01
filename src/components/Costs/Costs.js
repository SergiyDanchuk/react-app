import { Card } from '../UI/Card';
import { CostsFilter } from '../CostsFilter/CostsFilter';
import { CostList } from './CostList';
import { CostDiagram } from './CostDiagram';
import './Costs.css'
import { useState } from 'react';

const Costs = (props) => {
  const { costsItems } = props;
  const [year, setYear] = useState('2020');

  const costFilterChangeHandler = (year) => {
    setYear(year);
  }

  const filteredCosts = costsItems.filter(item => item.date.getFullYear().toString() === year)

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={costFilterChangeHandler} year={year} />
      <CostDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  )
}

export { Costs }