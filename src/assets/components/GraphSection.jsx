import "../../sass/components/GraphSection.scss"
import GraphRow from "./GraphRow"

function GraphSection() {
  return (
    <section
      className="Graph-con container w-[90%] flex flex-col justify-center items-center mt-5 px-5 pt-5 pb-5"
    >
      <h2 className="self-start">Spending - Last 7 days</h2>
      <GraphRow />
    </section>
  )
}
export default GraphSection