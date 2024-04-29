import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/Header/SearchBar";
import RightPanel from "./components/Header/RightPanel";

function App() {
  return (
    <div className="flex">
      <RightPanel />
      <div className="flex flex-col w-full">
        <SearchBar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
