import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Admin from "./components/Admin";
import Post from "./components/Posts";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Router>
				<div>
					<header className="header">
						<div className="links">
							<ul>
								<li>
									<NavLink
										to="/"
										activeStyle={{ backgroundColor: "#FFC480" }}
										className="link"
										exact="true">
										Dashboard
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/post"
										activeStyle={{ backgroundColor: "#FFC480" }}
										className="link">
										Post
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/contact"
										activeStyle={{ backgroundColor: "#FFC480" }}
										className="link">
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</header>
					<div>
						<Route exact path="/" component={Admin} />
						<Route exact path="/post" component={Post} />
						<Route exact path="/contact" component={Contact} />
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
