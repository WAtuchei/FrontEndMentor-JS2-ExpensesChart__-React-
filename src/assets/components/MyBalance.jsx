import "../../sass/components/MyBalance.scss"

function MyBalance() {
  return (
    <header
      className="container w-[90%] flex flex-row justify-between items-center px-6 py-5 text-white"
    >
      <div>
        <h4 className="text-[17px]">
          My balance
        </h4>
        <p className="text-[28px] font-[500] mt-1">
          $921.48
        </p>
      </div>
      <div>
        <svg width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
      </div>
    </header>
  )
}
export default MyBalance