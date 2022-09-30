import React,{useState} from "react";

function AddTransactionForm() {
  const[formData,setFormData]=useState({
    amount :null,
    category:"",
    description:"",
    date:""
  });
  function handleEvent(event){
    setFormData({...formData,[event.target.name]:event.target.value});
  }
  function handleSubmit(event){
    event.preventDefault()
    onsubmission(formData)
  }
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
