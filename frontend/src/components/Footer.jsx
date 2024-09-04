import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareGithub,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>F8 Islamabad, Pakistan</li>
            <li>CareerDost@gmail.com</li>
            <li>+92 3000027314</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://www.facebook.com/profile.php?id=100006806358447&mibextid=LQQJ4d"}  target="_blank">
                <span>
                <FaFacebookSquare />
                </span>
                <span>Facebook</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/hassan_raza_memon1?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr"}  target="_blank">
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/HASSANRAZA111"}  target="_blank">
                <span>
                <FaSquareGithub />
                </span>
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/𝐇𝐚𝐬𝐬𝐚𝐧-𝐑𝐚𝐳𝐚-997430297"} target="_blank">
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By Hassan Raza
      </div>
    </>
  );
};

export default Footer;
