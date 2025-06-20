import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
export default function Footercomp() {
  return (
    <Footer container className="mt-25 mainbgcolor">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="#"
            src={logo}
            alt="Flowbite Logo"
            name="Hurghada Fun"
          />
          <FooterLinkGroup>
            <Link className="ms-4 text-1xl font-bold" to="./about">
              About
            </Link>
            <Link className="ms-4 text-1xl font-bold" href="#">
              Privacy Policy
            </Link>
            <Link className="ms-4 text-1xl font-bold" href="#">
              Licensing
            </Link>
            <Link className="ms-4 text-1xl font-bold" to="./contact">
              Contact
            </Link>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <a
          className="text-center font-bold text-white mt-20"
          href="https://www.linkedin.com/in/abdallah-khodari-51aa44259/"
        >
          Devoloped By Abdallah Khodari
        </a>
      </div>
    </Footer>
  );
}
