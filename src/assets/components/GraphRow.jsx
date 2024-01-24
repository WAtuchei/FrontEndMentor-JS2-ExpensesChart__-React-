import "../../sass/components/GraphSection.scss"
import { useContext } from "react"
import DataContext from "../../data/contextData"
import GraphDay from "./GraphDay"

function Graph() {
  const graphData = useContext(DataContext)
  const hightestDayAmount = graphData.reduce((maxAmount, currAmount) => {
    return currAmount.amount > maxAmount.amount ? currAmount : maxAmount
  })

  return (
    <>
      <ul
        className="container w-full h-[200px] flex flex-row flex-nowrap gap-x-4 mt-7"
      >
        {graphData.map((data, index) =>{
          return (
            <GraphDay 
              key={index}
              data={data}
              isHightest={data.day === hightestDayAmount.day} />
            )
        })}
      </ul>

      <div className="break-line w-full mt-7"></div>
    </>
  )
}
export default Graph