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

	useEffect(() => {
		if (!monthlyPayment) return;
		const total = accounts.reduce((acc, curr) => acc + curr.balance, 0);
		const newValues = [total];
		let balance = total;
    while (balance >= 0) {
      const remain = balance - monthlyPayment
      if (remain === 0) break;
      if (newValues.length === 12) break;
      newValues.push(remain);
			balance -= monthlyPayment;
		}
		setValues(newValues);
	}, [monthlyPayment, accounts]);

	const label = [
		'jan',
		'feb',
		'mar',
		'apr',
		'may',
		'july',
		'aug',
		'sep',
		'oct',
		'nov',
		'dec',
	];

	const data = {
		labels: label,
		datasets: [
			{
				fill: true,
				label: 'amount',
				data: values,
				borderColor: '#6060D8',
				backgroundColor: '#6060D899',
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

	return <>{data && values && <Line options={options} data={data} />}</>;
};
export default LineGraph;
