import { DiagramBar } from "./DisagramBar"
import './Diagram.css'

const Diagram = (props) => {
  const { dataSets } = props;
 
  const dataSetsValue = dataSets.map(dataSet => dataSet.value)
  const maxMonthCosts = Math.max(...dataSetsValue)
  
  return (
    <div className="diagram">
      {dataSets.map(dataSet => {
        return <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      })}
    </div>
  )
}

export { Diagram }