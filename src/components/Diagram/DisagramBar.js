import './DiagramBar.css'

const DiagramBar = (props) => {
  const { value, maxValue, label } = props;

  let barFillHeight = "0%";
  
  if (maxValue > 0) {
    barFillHeight = `${Math.round(value / maxValue * 100)}%`;
  }

  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div
          className='diagram-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='diagram-bar__label'>{label}</div>
    </div>
  )
}

export { DiagramBar }