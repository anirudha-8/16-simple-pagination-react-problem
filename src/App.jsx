import "./App.css";
import Pagination from "./components/Pagination";

const items = [
	"itemOne",
	"itemTwo",
	"itemThree",
	"itemFour",
	"itemFive",
	"itemSix",
	"itemSeven",
	"itemEight",
];

function App() {
	return <Pagination items={items} itemsPerPage={3} />;
}

export default App;
