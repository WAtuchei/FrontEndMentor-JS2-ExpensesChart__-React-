import { useContext, useState } from "react"
import "../../sass/components/GraphSection.scss"
import DataContext from "../../data/contextData"
import PropTypes from "prop-types"

function Graph() {
  const graphData = useContext(DataContext)
  const [graphIsTop, setGraphIsTop] = useState('')

  function GraphDay({data}) {
    
    return (
      <li className="flex flex-col flex-1 items-center">
           <div className={`Graph-day${graphIsTop} w-full h-full`}></div>
           <p className="thin-Text mt-3"
           >
              {`${data.day}`}
           </p>
      </li>
    )
  }

  GraphDay.propTypes = {
    data: PropTypes.shape({
      day: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  }

  return (
    <>
      <ul
        className="container w-full flex flex-row flex-nowrap gap-x-4 mt-10"
      >
        {graphData.map((data, index) =>{
          return <GraphDay key={index} data={data} />
        })}
      </ul>

      <div className="break-line w-full mt-7"></div>
    </>
  )
}
export default Graph