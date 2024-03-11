"use client";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import { auth } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // const session = await auth();
  // console.log(session);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click occurred outside the sidebar or openSidebarButton
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = (e) => {
    // e.stopPropagation();
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <aside
        id="default-sidebar"
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-56 p-4 z-20 lg:w-64 h-screen bg-[#F9FAFB] border- shadow transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full lg:translate-x-0"
        }`}
        aria-label="default-sidebar"
      >
        {/* <div className=" flex items-center gap-5 mb-5">
          <Image
            src="/noavatar.png"
            alt=""
            width="50"
            height="50"
            className="cover rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium">John Doe</span>
            <span className="text-sm text-gray-500">Administrator</span>
          </div>
        </div> */}
        <a className="w-fit h-12 flex items-center mb-9" href="/">
          <Image
            src="/BMW.svg"
            alt="logo"
            width={200}
            height={200}
            className="h-full w-full object-contain object-left"
          />
        </a>
        <ul className="h-[66vh]">
          {menuItems.map((cat) => (
            <li key={cat.title} onClick={closeSidebar}>
              <span className="font-bold text-sm mx-2">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
        <ul className="mt-[11px]">
          <a
            className="flex items-center justify-center gap-2 bg-[#FFFFFF] text-[13px] font-medium rounded-[5px] px-3 py-2 text-[#363A43] w-full h-[38px] mb-5 hover:opacity-80 border border-[#E7E4F5]"
            target="_blank"
            href="/"
          >
            Open App
            <svg
              className="h-4 w-4 text-[#363A43]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z"></path>{" "}
              <line x1="17" y1="7" x2="7" y2="17"></line>{" "}
              <polyline points="8 7 17 7 17 16"></polyline>
            </svg>
          </a>
          
        </ul>
      </aside>
      <div className="lg:hidden bg-gray-100">
        <div className="flex overflow-hidden bg-gray-200">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="bg-[#F9FAFB] shadow fixed left-0 right-0 z-20">
              <div className="w-full mx-auto">
                <div className="flex justify-between items-center py-4 px-5">
                  <button
                    className="text-[#363A43]"
                    id="open-sidebar"
                    onClick={toggleSidebar}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                  <a className="w-fit h-7 flex items-center" href="/">
                    <div className="h-full w-full object-contain object-right"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
