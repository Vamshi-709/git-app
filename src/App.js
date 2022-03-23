import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Page404 from "./pages/Page404";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Alert />
                      <Home />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<Page404 />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
