import { NavBar } from "@/components/layout/navbar";

export const Home = () => {
	return (
		<>
			<NavBar />
			<div className="app-content">
				<h1>Welcome to DEVdecola</h1>
				<p>Your one-stop solution for all things development!</p>
			</div>
		</>
	);
};
