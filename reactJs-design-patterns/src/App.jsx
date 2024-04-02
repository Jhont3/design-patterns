import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider value={[]}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
