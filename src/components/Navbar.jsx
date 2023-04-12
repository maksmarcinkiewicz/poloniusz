import { useEffect, useState } from "react";
import React from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logo-poloniusz-background.jpg";
import plflag from "../assets/republic-of-poland.png";
import { useTranslation } from "react-i18next";
import ukflag from "../assets/united-kingdom.png";
import i18n from "i18next";
import cookies from "js-cookie";
import { Outlet, Link } from "react-router-dom";
import { FcContacts, FcAbout, FcDonate, FcNews } from "react-icons/fc";
import { FaWpforms } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

function Navbar() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [currentLanguage, setCurrentLanguage] = useState("pl");

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <React.Fragment>
      <div className="navbar z-10">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  <FcNews />
                  {t("menu_1")}
                </a>
              </li>
              <li>
                <a>
                  <FcDonate />
                  {t("menu_2")}
                </a>
              </li>
              <li tabIndex={0}>
                <a className="">
                  <FcAbout />
                  {t("menu_3")}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 shadow bg-base-100 rounded-box w-42">
                  <li>
                    <a>Regulamin Szkoły</a>
                  </li>
                  <li>
                    <a>Statut Szkoły</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  <MdOutlinePayments />
                  {t("menu_4")}
                </a>
              </li>
              <li>
                <a>
                  <FaWpforms />
                  {t("menu_5")}
                </a>
              </li>
              <li>
                <a>
                  <FcContacts />
                  {t("menu_6")}
                </a>
              </li>

              <li>
                <div>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("pl");
                      setCurrentLanguage("pl");
                    }}
                    className=""
                  >
                    <img src={plflag} alt="" className="w-8 mr-2" />
                  </button>
                  <button
                    onClick={() => {
                      i18n.changeLanguage("eng");
                      setCurrentLanguage("en");
                    }}
                    className=""
                  >
                    <img src={ukflag} alt="" className="w-8" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <Link to="/home">
            <img
              src={logo}
              alt=""
              className="logo hidden lg:block max-w-[150px]"
            />
          </Link>
        </div>
        <img src={logo} alt="" className="logo hidden md:block lg:hidden" />
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>{t("menu_1")}</a>
            </li>
            <li>
              <a>{t("menu_2")}</a>
            </li>
            <li tabIndex={0}>
              <a>
                {t("menu_3")}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Regulamin Szkoły</a>
                </li>
                <li>
                  <a>Statut Szkoły</a>
                </li>
              </ul>
            </li>
            <li>
              <a>{t("menu_4")}</a>
            </li>
            <li>
              <a>{t("menu_5")}</a>
            </li>
            <li>
              <a>{t("menu_6")} </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/home">
            <img src={logo} alt="" className="logo md:hidden" />
          </Link>
          <a className="btn hidden md:inline-flex">Sign child</a>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar;
