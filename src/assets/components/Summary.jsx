import "../sass/components/Summary.scss";

function Summary() {
  return (
    <section
      id="Summary"
      className="container w-[90%] flex flex-row justify-between mt-5 px-5 py-3"
    >
      <div className="container flex flex-row justify-between items-center">
        <div className="flex flex-col justify-start">
          <h4 className="thin-text">Total this month</h4>
          <p className="text-[34px] font-[700]">$478.33</p>
        </div>
        
        <div className="flex flex-col items-end">
          <p className="text-[18px] font-[500]">+2.4%</p>
          <p className="thin-text">from last month</p>
        </div>
      </div>
    </section>
  );
}
export default Summary;
