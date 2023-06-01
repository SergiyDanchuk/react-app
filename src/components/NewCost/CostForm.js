import { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const { onCancel, onSaveCostData } = props;

  // cosnt [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // })

  const nameChangeHandler = (event) => {
    setName(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   name : event.target.value
    // })

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     name : event.target.value
    //   }
    // }) 
  }
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   amount : event.target.value
    // })

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount : event.target.value
    //   }
    // })
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   date : event.target.value
    // })

    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date : event.target.value
    //   }
    // })
  }

  const sabmitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date)
    }

    onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={sabmitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Add</button>
          <button type='button' onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  )
}

export { CostForm }