import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Weather from "../Components/Weather";
// import Spotify, { accessUrl } from "../Components/Spotify/Spotify";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  MenuIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

const actions = [
  {
    icon: ClockIcon,
    name: "Request time off",
    href: "#",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    icon: BadgeCheckIcon,
    name: "Benefits",
    href: "#",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    icon: UsersIcon,
    name: "Schedule a one-on-one",
    href: "#",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    icon: CashIcon,
    name: "Payroll",
    href: "#",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    icon: ReceiptRefundIcon,
    name: "Submit an expense",
    href: "#",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    icon: AcademicCapIcon,
    name: "Training",
    href: "#",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Replace with your content */}
        <div className="fpy-4">
          <div className="flex flex-row border-4 border-dashed border-gray-200 rounded-lg">
            {/* LHS box */}
            <div
              className="flex-auto w-32 align-items: center sm:px-6 md:px-8 bg-primary-blue-15 order-4 border-dashed border-gray-200 rounded-lg h-96"
              style={{
                paddingTop: "20px",
                marginRight: "10%",
                alignItems: "center",
              }}
            >
              <div
                className="sm:px-6 md:px-8 order-4 border-gray-200 rounded-lg"
                style={{ marginBottom: "5%" }}
              >
                {/* <Weather /> */}
              </div>
              <div className="sm:px-6 md:px-8 order-4 border-gray-200 rounded-lg h-24 min-h-[50%]">
                {/* <Spotify /> */}
              </div>
              {/* <a href={accessUrl}>LOGIN TO SPOTIFY</a> */}
            </div>

            {/* RHS Box */}
            <div
              className="flex-auto w-32 sm:px-6 md:px-8 bg-blue-500 order-4 border-dashed border-gray-200 rounded-lg h-150"
              style={{
                paddingTop: "20px",
                right: "0",
                maxWidth: "30%",
              }}
            >
              <div className="flex-auto w-32 sm:px-6 md:px-8 bg-blue-500 order-4 border-dashed border-gray-200 rounded-lg" />
            </div>
          </div>
        </div>

        {/* /End replace */}
      </div>
    </>
  );
};

export default Home;
