import { Diagram } from "../Diagram/Diagram"

const CostDiagram = (props) => {
  const { costs } = props;

  const diagramDataSet = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
  ]

  for (const cost of costs) {
    const costMonth = cost.date.getMonth();
    diagramDataSet[costMonth].value += cost.amount;
    console.log(diagramDataSet)
  }

  return <Diagram dataSets={diagramDataSet} />

}

export { CostDiagram }