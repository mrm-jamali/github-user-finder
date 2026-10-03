import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import  Nav from "./components/Nav";
import Footer from "./components/Footer";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

  const queryClient=new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="min-h-screen bg-gray-100 flex flex-col">
   <Nav/>
      <main className="flex-1">
            <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/favorite" element={<Favorite />} />
       <Route path="/about" element={<About />} />
       
      </Routes>

      </main>
  <Footer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
