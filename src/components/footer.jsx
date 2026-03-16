// FooterSection.jsx
import {Link} from "react-router-dom"
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"
import { FaLinkedin, FaTiktok } from "react-icons/fa"
import Reveal from "../components/reveal"


export default function FooterSection() {
  return (
    <footer className="bg-[#1A2B6D] text-white px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#1F3164] flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <Reveal animation="fade-right">
                <div>
                  <p className="font-bold text-sm items-center justify-center flex mt-2">LOCATION:
                  <span className="text-white/85 font-normal text-sm pl-1">
                    Lagos, Nigeria (Global Operations)
                  </span>
                  </p>
                </div>
                </Reveal>
              </div>
              <Reveal animation="fade-right">
                <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#1F3164] flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm flex justify-center items-center mt-2">PHONE/WHATSAPP:
                    <span className="text-white/85 text-base pl-1 font-normal">+2348107647503</span>
                  </p>
                </div>
              </div>
              </Reveal>
              <Reveal animation="fade-right">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-[#1F3164] flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-sm flex items-center justify-center mt-2">EMAIL:
                  <span className="text-white/85 font-normal pl-1 text-base">
                    info@agpnlimited.com
                  </span>
                  </p>
                </div>
              </div>
              </Reveal>
              <div className="border-t border-white/15 mt-1 pt-1"></div>
          {/*social media links*/}
          <Reveal animation="fade-left">
          <div className="flex ml-3">
            <a className="p-3" href="https://www.facebook.com/share/1Cwyw3ibZo/?mibextid=wwXIfr">
            <BsFacebook
              size="40"
            />
            </a>
            <a className="p-3" href="https://x.com/agpnlimited">
            <BsTwitter
              size="40"
            />
            </a>
            <a className="p-3" href="https://www.instagram.com/agpnlimited">
            <BsInstagram
              size="40"
            />
            </a>
            <a className="p-3" href="https://www.linkedin.com/company/afroglobe-prime-network-ltd">
            <FaLinkedin
              size="40"
            />
            </a>
            <a className="p-3" href="https://www.tiktok.com/@agpnlimited1">
            <FaTiktok
              size="40"
            />
            </a>
          </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-1 text-center">
              {/* Quick Links */}
              <Reveal animation="fade-left">
              <div>
                <h4 className="text-xl font-extrabold mb-6 underline">Quick Links</h4>
                <ul className="space-y-4 text-white/85 text-sm">
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/our-ecosystem">
                      Our Ecosystem
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/insights">
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/contact-us">
                      Contact
                    </Link>
                  </li>
                </ul>
                </div>
                </Reveal>
                <Reveal animation="fade-right">
                <div>
                <h4 className="text-xl font-extrabold mb-6 underline">Community</h4>
                <ul className="space-y-4 text-white/85 text-sm">
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/get-involved">
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/refer-and-earn">
                      Refer &amp; Earn
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/certificates">
                      Certificates
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-white transition text-lg" to="/empowerment">
                      Empowerment
                    </Link>
                  </li>
                </ul>
                </div>
                </Reveal>
            </div>
        </div>
        {/* Divider */}
        <Reveal animation="zoom-in">
        <div className="border-t border-white/15 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/80 text-sm">
            <p>
              Copyright © 2026 Afroglobe Prime Network Limited.
            </p>
            <p>
              All rights reserved.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}