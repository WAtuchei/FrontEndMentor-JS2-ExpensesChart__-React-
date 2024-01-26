import "../../sass/components/GraphSection.scss"
import { useState } from "react"
import PropTypes from "prop-types"

function GraphDay({data, isHighest, graphHeight}) {
  const { day, amount } = data
  const [showIndicators, setShowIndicators] = useState(false)


  const eachHeight = {
    height: `${graphHeight}%`,
  }

  GraphDay.propTypes = {
    data: PropTypes.shape({
      day: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    }),
      isHighest: PropTypes.bool.isRequired,
      graphHeight: PropTypes.number
  }
  return (
    <li 
      className="flex flex-col flex-1 justify-end items-center"
      onMouseOver={() => {setShowIndicators(true)}}
      onMouseOut={() => {setShowIndicators(false)}}
    >
      
      <div className="container h-full flex flex-col justify-end">
        {showIndicators && (          
          <div className="Graph-day__indicators w-[110%] py-1 rounded text-center">
            {`$${ amount }`}
          </div>
          )      
        }
        <div 
          className={`Graph-day${isHighest ? '__Top' : '' } w-full mt-2`}
          style={eachHeight}
        >
        </div>
      </div>
      <p className="thin-Text mt-3"
      >
        {`${ day }`}
      </p>
    </li>
  )
}
export default GraphDay