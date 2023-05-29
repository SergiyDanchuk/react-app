import { CostItem } from './CostItem';
import { Card } from '../UI/Card';
import './Costs.css'

const Costs = (props) => {
  const { costsItems } = props;
  return (
    <Card className="costs">
      {
        costsItems.map((cost, index) =>
          <CostItem key={index} date={cost.date} description={cost.description} amount={cost.amount} />
        )
      }
    </Card>
  )
}

export { Costs }