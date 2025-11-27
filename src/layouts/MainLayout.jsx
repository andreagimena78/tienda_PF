import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header";
import "./MainLayout.css";

export const MainLayout = () => {
    return(
    <>
        <Header/>
        <main className="main-layout container py-4">
            <div className="row justify-content-center">
                <div className="col-12">
                    <Outlet/>
                </div>
            </div>
        </main>

    </>
    );
}; 