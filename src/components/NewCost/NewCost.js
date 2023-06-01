import { useState } from 'react';
import { CostForm } from './CostForm'

import './NewCost.css'

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const { onAddCost } = props;

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    onAddCost(costData);
    setIsFormVisible(false)
  }

  const inputCostDataHandler = () => {
    setIsFormVisible(true)
  }

  const cancelCostHandler = () => {
    setIsFormVisible(false)
  }

  return (
    <div className='new-cost'>
      {isFormVisible ?
        <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler} /> :
        <button onClick={inputCostDataHandler}>Add new cost</button>
      }
    </div>
  )
}

export { NewCost }