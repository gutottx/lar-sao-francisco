import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimalsPage } from "./pages/AnimalsPage";
import { AnimalPage } from "./pages/AnimalPage";
import { DonationPage } from "./pages/DonationPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full bg-[#FAF4E3]">
          <BrowserRouter>
            <AuthProvider>
              <Navbar/>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre"/>
                <Route path="/contato"/>
                <Route path="/animais" element={<AnimalsPage />} />
                <Route path="/animais/:id" element={<AnimalPage />} />
                <Route path="/animais/:id/donation" element={<DonationPage />} />
                <Route path="/login" element={<LoginPage />}/>

                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
          <Footer />
        </div>
    </QueryClientProvider>
  )
}

export default App
