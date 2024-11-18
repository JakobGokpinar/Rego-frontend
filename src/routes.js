import React, {lazy, Suspense} from "react"
import { Routes, Route } from "react-router-dom"

const LoginAndRegister = lazy(() => import('./Pages/LoginAndRegister/LoginAndRegister.js'))
const HomePageScreen = lazy(() => import('./Pages/HomePage/HomePageScreen.js'))
const ProductPage = lazy(() => import('./Pages/ProductPage/ProductPage.js'))
const ProductCreatePage = lazy(() => import('./Pages/ProductCreate/ProductCreatePage.js'))
const DashboardScreen = lazy(() => import('./Pages/Dashboard/DashboardScreen.js'))
const NotFoundScreen = lazy(() => import('./Pages/NotFound.js'))


export default function AppRoutes({ updtUserDoc }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePageScreen/>} />
                <Route path="/login" element={<LoginAndRegister updtUserDoc={updtUserDoc}/>} />
                <Route path="/register" element={<LoginAndRegister updtUserDoc={updtUserDoc}/>} />
                <Route path="/produkt/:annonceId" element={<ProductPage />} />
                <Route path="/new" element={<ProductCreatePage />} />
                <Route path="/dashboard" element={<DashboardScreen />}/>
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Suspense>
    )
}