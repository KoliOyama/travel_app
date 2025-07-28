import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-bgGray">
      <Header />
      <div className="flex max-container pt-10 w-full justify-between gap-5">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
