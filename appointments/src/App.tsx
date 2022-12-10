import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation pages={[]} settings={["Logout"]} />
    </>
  );
}

export default App;
