import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import SideNavBar from "./components/Nav/SideNavBar/SideNavBar";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import TopNavBar from "./components/Nav/TopNavBar/TopNavBar";

const App = (): React.JSX.Element => {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <div className="flex grow">
            <SideNavBar />
            <div className="flex grow flex-col">
              <TopNavBar />
              <main className="flex grow flex-col items-center">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
};

export default App;
