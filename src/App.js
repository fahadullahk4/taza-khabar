import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const pageSize = 5;
	const apiKey = process.env.REACT_APP_NEWS_API;
	const [progress, setProgress] = useState(0);
	return (
		<>
			<Router>
				<Navbar title="Taza Khabar" />
				<div className="container">
					<Routes>
						<Route
							path="/"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="general"
									pageSize={pageSize}
									country="pk"
									category="general"
								/>
							}
						/>
						<Route
							path="/business"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="business"
									pageSize={pageSize}
									country="pk"
									category="business"
								/>
							}
						/>
						<Route
							path="/entertainment"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="entertainment"
									pageSize={pageSize}
									country="pk"
									category="entertainment"
								/>
							}
						/>
						<Route
							path="/general"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="general"
									pageSize={pageSize}
									country="pk"
									category="general"
								/>
							}
						/>
						<Route
							path="/health"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="health"
									pageSize={pageSize}
									country="pk"
									category="health"
								/>
							}
						/>
						<Route
							path="/science"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="science"
									pageSize={pageSize}
									country="pk"
									category="science"
								/>
							}
						/>
						<Route
							path="/sports"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="sports"
									pageSize={pageSize}
									country="pk"
									category="sports"
								/>
							}
						/>
						<Route
							path="/technology"
							element={
								<News
									setProgress={setProgress}
									apiKey={apiKey}
									key="technology"
									pageSize={pageSize}
									country="pk"
									category="technology"
								/>
							}
						/>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
