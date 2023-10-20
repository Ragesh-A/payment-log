import Header from './components/Header';
import LineGraph from './components/LineGraph';
import SideBar from './components/SideBar';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<main className='app'>
				<SideBar />
				<div className=''>
					<Header />
					<LineGraph />
				</div>
			</main>
		</Provider>
	);
}

export default App;
