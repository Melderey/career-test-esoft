import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
