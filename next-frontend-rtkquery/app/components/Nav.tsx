"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";
import {useAppSelector} from "@/lib/hooks";
import {selectAuth} from "@/lib/features/auth/authSlice";
import useAuth from "@/app/hooks/useAuth";

export const Nav = () => {
  const pathname = usePathname();
    const auth = useAuth();
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
                      auth && <Link
                          className={`nav-item nav-link`}
                          href="/"
                      >
                          Home
                      </Link>
                  }
                  {
                      auth &&  <Link
                          className={`nav-item nav-link`}
                          href="/movies"
                      >
                          Movies
                      </Link>
                  }

                  {
                      !auth && <Link
                          className={`nav-item nav-link`}
                          href="/login"
                      >
                          Login
                      </Link>
                  }
                  {
                      auth && <Link
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
