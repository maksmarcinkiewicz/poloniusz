import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import "../Styles/Navbar.css";
import logo from "../assets/logobadquality.jpg";
import plflag from "../assets/republic-of-poland.png";
import { useTranslation } from "react-i18next";
import ukflag from "../assets/united-kingdom.png";
import AboutUs from "./AboutUs";
import menu from "../assets/menu.png";
import i18n from "i18next";
import cookies from "js-cookie";
import { current } from "tailwindcss/colors";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const [currentLanguage, setCurrentLanguage] = useState("pl");

  const { t } = useTranslation();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const toggleDropdownFunc = () => {
    setToggleDropdown((current) => !current);
  };
  useEffect(() => {
    console.log(toggleDropdown);
    document.title = t("app_title");
  }, [toggleDropdown, currentLanguage, t]);

  return (
    <div>
      <header className="flex">
        <Link to={`home`}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <nav ref={navRef}>
          <button className="btn btn-outline md:hidden">zapisz dziecko</button>
          <a href="/#" className="font-poppins font-medium text-lg">
            {t("menu_1")}
          </a>
          <a href="/#" className="font-poppins font-medium text-lg">
            {t("menu_2")}
          </a>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="">
              <Link
                to={`about`}
                className="flex items-center font-poppins font-medium text-lg"
              >
                {t("menu_3")}
                <AiFillCaretDown />
              </Link>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-poppins font-medium text-lg">
                  Regulamin Szkoły
                </a>
              </li>
              <li>
                <a className="font-poppins font-medium text-lg">
                  Statut Szkoły
                </a>
              </li>
            </ul>
          </div>

          <Link to={`payments`} className="font-poppins font-medium text-lg">
            {t("menu_4")}
          </Link>

          <Link to={`forms`} className="font-poppins font-medium text-lg">
            {t("menu_5")}
          </Link>
          <Link to={`contact`} className="font-poppins font-medium text-lg">
            {t("menu_6")}
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes className="pl-2" />
          </button>
        </nav>
        <div>
          {/* {currentLanguage === "pl" ? (
            <button className="btn btn-outline hidden md:block md:mr-10">
              {t("sign_child")}
            </button>
          ) : (
            <button className="btn btn-outline hidden md:invisible md:mr-10">
              {t("sign_child")}
            </button>
          )} */}
          <button
            onClick={() => {
              i18n.changeLanguage("pl");
              setCurrentLanguage("pl");
            }}
          >
            <img src={plflag} alt="" className="w-8 mr-2" />
          </button>
          <button
            onClick={() => {
              i18n.changeLanguage("eng");
              setCurrentLanguage("en");
            }}
          >
            <img src={ukflag} alt="" className="w-8" />
          </button>

          <button className="nav-btn" onClick={showNavbar}>
            <img src={menu} alt="" className="w-8 ml-5" />
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
