//"use client";

import Link from "next/link";

import getAuthToken from "../utils/auth";


export const Nav = async () => {

   const auth = await getAuthToken();

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
                    auth?.value
                    &&
                      <Link
                          className={`nav-item nav-link`}
                          href="/home"
                      >
                          Home
                      </Link>
                  }
                  {
                     auth?.value
                     &&
                      <Link
                          className={`nav-item nav-link`}
                          href="/movies"
                      >
                          Movies
                      </Link>
                  }

                  {
                      !auth?.value
                      && <Link
                          className={`nav-item nav-link`}
                          href="/login"
                      >
                          Login
                      </Link>
                  }
                  {
                      auth?.value
                      && <Link
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
