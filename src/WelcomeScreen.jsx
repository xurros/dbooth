import React from "react";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
      
          <div className="WelcomeScreen">
            <h3 className="header">Welcome to the dBooth Meet App</h3>
            <p>
              Log in to see upcoming events around the world for full-stack
              developers
            </p>

            <div className="button_cont" align="center">
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google sign-in"
                  />
                </div>

                <button
                  onClick={() => {
                    props.getAccessToken();
                  }}
                  rel="nofollow noopener"
                  class="btn-text"
                  style={{ margin: "0" }}
                >

                  <b>Sign in with google</b>
                </button>

              </div>
            </div>
            <a href="https://xurros.github.io/dbooth/privacy.html"
              rel="nofollow noopener">
              Privacy policy
            </a>
          </div>
        
  )
    : null;
}

export default WelcomeScreen;