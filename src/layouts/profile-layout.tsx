import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Menubar } from "@/components/menubar";
import React from "react";
import { Outlet } from "react-router-dom";

export const ProfileLayout: React.FC = function() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-[1140px] mt-12 mb-28 flex flex-row">
                <Menubar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}