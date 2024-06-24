import "./App.css";
import Search from "./components/Search";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  return (
    <>
    <div className="container mx-auto">
      <Header />
      <Search/>
      {/* <Card />
      <Card2/> */}
      </div>
    </>
  );
}

export default App;
