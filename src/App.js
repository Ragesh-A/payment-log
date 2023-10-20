import Header from './components/Header';
import LineGraph from './components/LineGraph';
import SideBar from './components/SideBar';
import './App.css'

function App() {
	return (
		<main className='app'>
			<SideBar />
			<div className=''>
				<Header />
				<LineGraph />
			</div>
		</main>
	);
}

export default App;
