import "../../sass/components/GraphSection.scss"
import { useContext } from "react"
import DataContext from "../../data/contextData"
import GraphDay from "./GraphDay"

function Graph() {
  const graphData = useContext(DataContext)
  const highestDayAmount = graphData.reduce((maxAmount, currAmount) => {
    return currAmount.amount > maxAmount.amount ? currAmount : maxAmount
  })
  const calGraphHeight = (maxHeight, currentHight) => {
    return Math.ceil((currentHight * 100) / maxHeight)
  }

  return (
    <>
      <ul
        className="container w-full h-[200px] flex flex-row flex-nowrap gap-x-4 mt-7"
      >
        {graphData.map((data) =>{
          return (
            <GraphDay 
              key={data.day}
              data={data}
              isHighest={data.day === highestDayAmount.day} 
              graphHeight={calGraphHeight(highestDayAmount.amount, data.amount)}/>
            )
        })}
      </ul>

      <div className="break-line w-full mt-7"></div>
    </>
  )
}
export default Graph