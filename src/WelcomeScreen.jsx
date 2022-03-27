import React from "react";
import "./WelcomeScreen.css";
import github_icon from './GitHub_icon.png';



function WelcomeScreen(props) {
  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">


{/* PROBLEM!! */}

{/*       
      <div className="watermark">
        <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      </div> */}
     
      
          <h3 className="header">Welcome to the Booth MeetApp</h3>
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
                type="button"
                onClick={() => {
                  props.getAccessToken();
                }}
                rel="nofollow noopener"
                className="btn-text"
                style={{ margin: "0" }}
              >
                <b>Sign in with google</b>
              </button>
            </div>
          </div>

     

          <br />
          <br />
          <br />
          <br />
          <div>
            <a href="https://xurros.github.io/dbooth">
              <img
                className="github_icon"
                alt="github_icon"
                src={github_icon}
                width="48"
                height="48"
              />
            </a>
          </div>
          <br />
          <p style={{ fontWeight: "300" }}>ssoewandi :: 2022</p>
          <br />
          <br />
          <br />
          <a href="https://xurros.github.io/dbooth/privacy.html"
            rel="nofollow noopener">
            Privacy policy
          </a>

        </div >
      




  )
    : null;
}


export default WelcomeScreen;