import "../sass/components/MyBalance.scss";

function MyBalance() {
  return (
    <header
      className="container w-[90%] flex flex-row justify-between items-center px-6 py-5 text-white"
    >
      <div>
        <h4 className="text-[17px]">My balance</h4>
        <p className="text-[28px] font-[500] mt-1">$921.48</p>
      </div>
      <div>
        <img src="../../../images/logo.svg" alt="App-logo" />
      </div>
    </header>
  );
}
export default MyBalance;