import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

const App = (): React.JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="flex grow flex-col items-center">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
