import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    // <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white">
    <footer className="bg-white border-0 mt-10 relative z-[3] overflow-hidden ">
      <div className="border-0 w-full md:h-20 md:px-8 lg:px-32  text-black flex items-center justify-between relative z-[3]  backdrop-blur-[2px] ">
        <div className="flex items-center justify-center gap-4 border-0 ">
          <img src="app_logo.png" alt="VisionBrush" className=" w-35 rounded-full  border-0" />
          <div className="text-center text-black text-xs opacity-80 pt-1 ml-5 border-0">
            © {new Date().getFullYear()} VisionBrush. All rights reserved.
          </div>
        </div>


        <div className="lg:w-42 flex justify-center items-center gap-4 text-black border-0">
          <a href="#" className="hover:text-gray-200"><FaFacebook size={18} /></a>
          <a href="#" className="hover:text-gray-200"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-gray-200"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-gray-200"><FaGithub size={18} /></a>
        </div>

      </div>
      <svg className="border-1 text-red-300  absolute left-0 top-[-135px] opacity-70 z-[2]" id="visual" viewBox="0 0 900 600" width="100%" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#4a4a4a00"></rect><g fill="#0099ff"><circle r="16" cx="689" cy="417"></circle><circle r="5" cx="157" cy="291"></circle><circle r="14" cx="377" cy="379"></circle><circle r="13" cx="429" cy="490"></circle><circle r="7" cx="631" cy="173"></circle><circle r="12" cx="715" cy="497"></circle><circle r="10" cx="878" cy="546"></circle><circle r="4" cx="804" cy="194"></circle><circle r="14" cx="561" cy="549"></circle><circle r="7" cx="255" cy="238"></circle><circle r="8" cx="890" cy="455"></circle><circle r="8" cx="614" cy="100"></circle><circle r="13" cx="93" cy="382"></circle><circle r="10" cx="598" cy="223"></circle><circle r="9" cx="687" cy="126"></circle><circle r="11" cx="643" cy="230"></circle><circle r="7" cx="795" cy="469"></circle><circle r="9" cx="394" cy="142"></circle><circle r="11" cx="63" cy="22"></circle><circle r="14" cx="869" cy="509"></circle><circle r="6" cx="96" cy="123"></circle><circle r="11" cx="641" cy="14"></circle><circle r="10" cx="509" cy="425"></circle><circle r="4" cx="737" cy="89"></circle><circle r="4" cx="129" cy="352"></circle><circle r="14" cx="549" cy="118"></circle><circle r="11" cx="619" cy="515"></circle><circle r="5" cx="29" cy="87"></circle><circle r="8" cx="150" cy="257"></circle><circle r="11" cx="427" cy="560"></circle><circle r="8" cx="4" cy="489"></circle><circle r="13" cx="466" cy="486"></circle><circle r="7" cx="138" cy="519"></circle><circle r="10" cx="883" cy="130"></circle><circle r="6" cx="771" cy="237"></circle><circle r="11" cx="251" cy="164"></circle><circle r="12" cx="834" cy="449"></circle><circle r="11" cx="83" cy="252"></circle><circle r="5" cx="533" cy="153"></circle><circle r="7" cx="397" cy="195"></circle><circle r="11" cx="389" cy="246"></circle><circle r="13" cx="28" cy="52"></circle><circle r="4" cx="574" cy="314"></circle><circle r="8" cx="862" cy="219"></circle><circle r="14" cx="54" cy="206"></circle><circle r="11" cx="312" cy="401"></circle></g></svg>
    </footer>
  );
}
