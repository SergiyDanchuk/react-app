import { CostItem } from "./CostItem";
import './CostList.css'

const CostList = (props) => {
  const { costs } = props;

  if (costs.length === 0) return <div className="cost-list__fallback">Empty</div>

  return (
    <ul className="cost-list">{
      costs.map(cost =>
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      )}
    </ul>
  )
}

export { CostList }