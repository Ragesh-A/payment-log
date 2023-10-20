import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import './lineGraph.css'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const LineGraph = () => {
	const { accounts, monthlyPayment } = useSelector((store) => store.user);
  const [values, setValues] = useState([]);
  const [label, setLabel] = useState([])

	useEffect(() => {
		if (!monthlyPayment) return;
		const total = accounts.reduce((acc, curr) => acc + curr.balance, 0);
    const newValues = [total];
    const newLabel = [0]
    let balance = total;
    let index = 1;
    while (balance >= 0) {
			const remain = balance - monthlyPayment
      newValues.push(remain > 0 ? remain : '0');
      newLabel.push(index)
      index++
			balance -= monthlyPayment;
		}
		setValues(newValues);
		setLabel(newLabel);
	}, [monthlyPayment, accounts]);



	const data = {
		labels: label,
		datasets: [
			{
				fill: true,
				label: 'amount',
				data: values,
				borderColor: '#6060D8',
				backgroundColor: 'transparent',
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'amount'
			},
		},
	};

	if (!monthlyPayment) return null;

	return <>{data && values && (
		<div className="">
			<h3>Balance of account after a number of month</h3>
			<Line options={options} data={data} data-testid='graph' className='line-chart'/>
		</div>
	)}</>;
};
export default LineGraph;
