"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (

      <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
          <a className="navbar-brand" href="#">
              Navbar
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                  <Link
                      className={`nav-item nav-link`}
                      href="/"
                  >
                      Home
                  </Link>
                  <Link
                      className={`nav-item nav-link`}
                      href="/todos"
                  >
                      Todo
                  </Link>
                  <Link
                      className={`nav-item nav-link`}
                      href="/verify"
                  >
                      Verify
                  </Link>
                  <Link
                      className={`nav-item nav-link`}
                      href="/quotes"
                  >
                      Quotes
                  </Link>
                  <Link
                      className={`nav-item nav-link`}
                      href="/login"
                  >
                      Login
                  </Link>
                  <Link
                      className={`nav-item nav-link`}
                      href="/dashboard/setting"
                  >
                      Dashboard setting
                  </Link>
              </div>
          </div>

      </nav>
    );
};
