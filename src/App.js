import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
	return (
		<>
			<Navbar title="Taza Khabar" />
			<div className="container">
				<News />
			</div>
		</>
	);
}

export default App;
