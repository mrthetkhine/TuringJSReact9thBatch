"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";


export const Nav = () => {
  const pathname = usePathname();

  return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>

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
                  {
                      <Link
                          className={`nav-item nav-link`}
                          href="/home"
                      >
                          Home
                      </Link>
                  }
                  {
                     <Link
                          className={`nav-item nav-link`}
                          href="/movies"
                      >
                          Movies
                      </Link>
                  }

                  {
                     <Link
                          className={`nav-item nav-link`}
                          href="/login"
                      >
                          Login
                      </Link>
                  }
                  {
                    <Link
                          className={`nav-item nav-link`}
                          href="/logout"
                      >
                          Logout
                      </Link>
                  }

              </div>
          </div>

      </nav>
  );
};
