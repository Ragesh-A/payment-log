import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../store/features/userAccounts';

const SideBar = () => {
	const [newAmount, setNewAmount] = useState();

	const accounts = useSelector((store) => store.user.accounts);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
    const amount = newAmount?.trim();
    if(!amount) return alert('amount should not be empty')
		dispatch(createAccount(amount));
		setNewAmount('');
	};

	return (
		<div className='' data-testid='sidebar'>
			<h1 className=''>Accounts</h1>
			<p className=''>Count: {accounts && accounts.length}</p>
      <form onSubmit={handleSubmit}>
        <b>

				<label htmlFor='newAmount' className=''>
					Balance
				</label>
        </b>
				<input
					type='number'
					id='newAmount'
          className='border'
          value={newAmount}
					onChange={(e) => setNewAmount(e.target.value)}
				/>
				<button type='submit'>submit</button>
			</form>
			{accounts && accounts.length === 0 ? (
				<p>Zero Balance</p>
			) : 
			// index as a key not recommended. But Each account has a single property - a balance
			accounts?.map((account, index) => <p key={'index'}>Balance: { account?.balance}</p>)
			}
		</div>
	);
};

export default SideBar;
