import { CostForm } from './CostForm'

import './NewCost.css'

const NewCost = (props) => {
  const { onAddCost } = props;
  const saveCostDatahandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    onAddCost(costData);
  }

  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={saveCostDatahandler} />
    </div>
  )
}

export { NewCost }