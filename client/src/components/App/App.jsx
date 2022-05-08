import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";
import TextExample from "../TextExample/TextExample";

const App = () => {
  return (
    <BrowserRouter>
      <TextExample />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
