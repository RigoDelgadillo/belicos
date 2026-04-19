import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./features/auth/pages/LoginPage";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";
import { PanelAdmin } from "./features/Administrator/pages/PanelAdmin";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { CategoriesPage } from "./features/Categories/pages/CategoriesPage";
import { SaucesPage } from "./features/Sauces/pages/SaucesPage";
import { ProductsPage } from "./features/Products/Page/ProductsPage";

export const App = () => {

  const checkSession = useAuthStore((state) => state.checkSession);
  const isCheckingSession = useAuthStore((state) => state.isCheckingSession)

  useEffect (() => {
    checkSession();
  }, []);

  if(isCheckingSession){
    return (
      <div className="h-lvh flex justify-center items-center">
        <h2>Cargando app...</h2>
      </div>
    )
  }

  return (
    <BrowserRouter>

      
      <Routes>
        <Route path="/" element={<div>Renderizar Menu Aquí</div>} />

        <Route path="/login" element={<LoginPage />} />


        <Route path="/PanelAdmin" element={
          <ProtectedRoute>
            <PanelAdmin/>
          </ProtectedRoute>
        }/>

        <Route path="/CategoriesPage" element ={
          <ProtectedRoute>
            <CategoriesPage />
          </ProtectedRoute>
        } />

        <Route path="/ProductsPage" element ={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        } />

        <Route path="/SaucesPage" element ={
          <ProtectedRoute>
            <SaucesPage />
          </ProtectedRoute>
        } />







        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
