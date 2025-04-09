import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

function MainLayout() {
    return (
        <>
            <header>
                <AppHeader />
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;