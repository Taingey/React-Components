import React from "react";
import { Footer as FooterWeb } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter
} from "react-icons/bs";
export const Footer = () => {
  return (
    <div className='w-full'>
      <FooterWeb bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-4 gap-8 px-6 py-8 md:grid-cols-4 sm:grid-cols-1">
          <div>
            <FooterWeb.Title title="Company" />
            <FooterWeb.LinkGroup col>
              <FooterWeb.Link href="#">About</FooterWeb.Link>
              <FooterWeb.Link href="#">Careers</FooterWeb.Link>
              <FooterWeb.Link href="#">Brand Center</FooterWeb.Link>
              <FooterWeb.Link href="#">Blog</FooterWeb.Link>
            </FooterWeb.LinkGroup>
          </div>
          <div>
            <FooterWeb.Title title="help center" />
            <FooterWeb.LinkGroup col>
              <FooterWeb.Link href="#">Discord Server</FooterWeb.Link>
              <FooterWeb.Link href="#">Twitter</FooterWeb.Link>
              <FooterWeb.Link href="#">Facebook</FooterWeb.Link>
              <FooterWeb.Link href="#">Contact Us</FooterWeb.Link>
            </FooterWeb.LinkGroup>
          </div>
          <div>
            <FooterWeb.Title title="legal" />
            <FooterWeb.LinkGroup col>
              <FooterWeb.Link href="#">Privacy Policy</FooterWeb.Link>
              <FooterWeb.Link href="#">Licensing</FooterWeb.Link>
              <FooterWeb.Link href="#">Terms &amp; Conditions</FooterWeb.Link>
            </FooterWeb.LinkGroup>
          </div>
          <div>
            <FooterWeb.Title title="download" />
            <FooterWeb.LinkGroup col>
              <FooterWeb.Link href="#">iOS</FooterWeb.Link>
              <FooterWeb.Link href="#">Android</FooterWeb.Link>
              <FooterWeb.Link href="#">Windows</FooterWeb.Link>
              <FooterWeb.Link href="#">MacOS</FooterWeb.Link>
            </FooterWeb.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-3 sm:flex sm:items-center sm:justify-between">
          <FooterWeb.Copyright href="#" by="Flowbite™" year={2022} />
          <div className=" flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterWeb.Icon href="#" icon={BsFacebook} />
            <FooterWeb.Icon href="#" icon={BsInstagram} />
            <FooterWeb.Icon href="#" icon={BsTwitter} />
            <FooterWeb.Icon href="#" icon={BsGithub} />
            <FooterWeb.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FooterWeb>
    </div>
  );
};
