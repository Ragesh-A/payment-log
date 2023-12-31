import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMonthly } from '../store/features/userAccounts'

import './header.css'

const Header = () => {
  const [total, setTotal] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState()
  const {accounts} = useSelector(store => store.user)
  const dispatch = useDispatch()

  const handelChange = () => {
    // we can put throttle
    if(!accounts.length) return
    dispatch(setMonthly(monthlyPayment))
  }

  useEffect(() => {
    if (!accounts) return 
    const totalAmount = accounts.reduce((acc, curr) => acc + (curr.balance), 0)
    setTotal(totalAmount)
  }, [accounts])

  return (
    <div className='header border-b-2 border-black py-2' data-testid='header'>
      <h3 className='font-bold text-2xl my-3'>Initial Balance: {total}</h3>
      <div className="monthly-input-wrap">
        <label htmlFor="payment">Monthly Payment</label>
        <input
          type="number"
          id="payment"
          className='border'
          value={monthlyPayment}
          onChange={e=> setMonthlyPayment(e.target.value)}
        />
        <button onClick={handelChange}>Check</button>
      </div>
    </div>
  )
}

export default Header