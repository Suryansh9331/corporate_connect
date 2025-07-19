import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaFacebookF, FaRss, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-16 px-4 text-sm text-gray-700" id="footer">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4 sm:space-y-6">
        {/* Top Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center text-sm font-semibold ">
          <a href="#" className="hover:underline">About</a>
          <a href="#"className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
   
          <a href="#" className="hover:underline">User Agreement</a>
          <a href="#"className="hover:underline">Accessibility</a>
        </div>

        {/* Branding and Copyright */}
        <div className="text-center text-sm text-gray-600">
          <span className="font-bold text-[#0073b1]">Corporate {""}<span className="font-normal text-black">Connect</span></span> © corporate connect corporation 2023
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          <a href="#"><FaLinkedin size={22} /></a>
         
          <a href="#"><FaTwitter size={22} /></a>
          <a href="#"><FaInstagram size={22} /></a>
         
        
        </div>
      </div>
    </footer>
  );
}
