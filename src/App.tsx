import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { QueryClient } from "@tanstack/react-query";
import NotUserFound from "./pages/NotUserFound";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
function App() {
  return (
<PersistQueryClientProvider
  client={queryClient}
  persistOptions={{ persister }}
>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotUserFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
   </PersistQueryClientProvider>
  );
}

export default App;
