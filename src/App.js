import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Post from "./components/Posts";

function App() {
	return (
		<div>
			<Router>
				<div>
					<header className="header">
						<div className="links">
							<ul>
								<li>
									<Link to="/" className="link">
										Dashboard
									</Link>
								</li>
								<li>
									<Link to="/post" className="link">
										Post
									</Link>
								</li>
								<li>
									<Link to="/" className="link">
										Lorem
									</Link>
								</li>
							</ul>
						</div>
					</header>
					<div>
						<Route exact path="/" component={Admin} />
						<Route exact path="/post" component={Post} />
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
