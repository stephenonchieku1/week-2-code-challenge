import React ,{useState}from "react";

function Search({whenSearched}) {
  const [search,setSearch]=useState('')
  
  function handleEvent(event){
  setSearch(event.target.value)
  whenSearched(search)}
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        onChange={handleEvent}
        placeholder="Search your Recent Transactions"
        /*onChange={() => console.log("Searching...")}*/
      />
      <i  onClick={handleEvent}
      className="circular search link icon"></i>
    </div>
  );
}

export default Search;
