import "../../sass/components/GraphSection.scss"
import { useState } from "react"
import PropTypes from "prop-types"

function GraphDay({data, isHightest}) {
   const { day, amount } = data
   const [showIndicators, setShowIndicators] = useState(false)

   GraphDay.propTypes = {
      data: PropTypes.shape({
        day: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
      }),
      isHightest: PropTypes.bool.isRequired
   }
   return (
     <li 
       className="flex flex-col flex-1 justify-end items-center"
       onMouseOver={() => {setShowIndicators(true)}}
       onMouseOut={() => {setShowIndicators()}}
     >
       {showIndicators && (          
         <div className="Graph-day__indicators w-[110%] py-1 rounded text-center">
           {`$${ amount }`}
         </div>
         )      
       }

       <div className={`Graph-day${isHightest ? `__Top h-full` : ' h-[50%]'} w-full mt-2`}></div>
       <p className="thin-Text mt-3"
       >
         {`${ day }`}
       </p>
     </li>
   )
 }
export default GraphDay