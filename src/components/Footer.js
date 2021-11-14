import React from "react";
import styled from "styled-components";

function Footer() {
  const date = new Date();

  return (
    <Main>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="facebook.com">
            <i class="fa-brands fa-facebook-square"></i>
          </a>
          <a href="twitter.com">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="linkedin.com">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="github.com">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">All Rights Reserved</p>

          <p>Movipack &copy; {date.getFullYear()}</p>
        </div>
      </footer>
    </Main>
  );
}

const Main = styled.div`
  max-width: 100vw;
  height: 5vh;
  background: #1b1b1b;
  color: white;
  text-align: center;

  .footer-distributed {
    background-color: #292c2f;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: normal 16px sans-serif;
    padding: 45px 50px;
  }

  .footer-distributed .footer-left p {
    color: #8f9296;
    font-size: 14px;
    margin: 0;
  }
  /* Footer links */

  .footer-distributed p.footer-links {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px;
    padding: 0;
    transition: ease 0.25s;
  }

  .footer-distributed p.footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
    transition: ease 0.25s;
  }

  .footer-distributed .footer-links a:before {
    content: "·";
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
  }

  .footer-distributed .footer-links .link-1:before {
    content: none;
  }

  .footer-distributed .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;
  }

  .footer-distributed .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 3px;
    transition: all 0.25s;
  }

  .footer-distributed .footer-right a:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  .footer-distributed p.footer-links a:hover {
    text-decoration: underline;
  }

  /* Media Queries */

  @media (max-width: 600px) {
    .footer-distributed .footer-left,
    .footer-distributed .footer-right {
      text-align: center;
    }
    .footer-distributed .footer-right {
      float: none;
      margin: 0 auto 20px;
    }
    .footer-distributed .footer-left p.footer-links {
      line-height: 1.8;
    }
  }
`;

export default Footer;
