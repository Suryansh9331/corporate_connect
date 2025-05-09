import { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function ContactStickyButton() {
  const [inFooter, setInFooter] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkFooterVisibility = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if any part of the footer is visible in viewport
      const isVisible = footerRect.top <= windowHeight && footerRect.bottom > 0;
      setInFooter(isVisible);
    };

    // Initial check and listeners
    checkFooterVisibility();
    window.addEventListener("scroll", checkFooterVisibility);
    window.addEventListener("resize", checkFooterVisibility);

    return () => {
      window.removeEventListener("scroll", checkFooterVisibility);
      window.removeEventListener("resize", checkFooterVisibility);
    };
  }, []);

  return (
    <div
      className={`z-50 transition-all duration-300 ease-in-out ${
        inFooter
          ? "absolute bottom-0 w-full md:w-auto md:right-6"
          : "fixed bottom-0 w-full md:w-auto md:bottom-6 md:right-6"
      } right-0 md:px-0`}
    >
      {!isOpen ? (
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="flex justify-center md:justify-start items-center gap-2 px-4 py-3 bg-[#3b4c57] text-white text-sm md:text-base font-semibold rounded-t md:rounded shadow-md hover:bg-[#2c3a45] transition w-full md:w-auto"
          >
            <FaRegCommentDots className="text-lg" />
            Contact us now
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-t md:rounded shadow-lg w-full md:w-96">
          {/* Header */}
          <div className="bg-[#485d69] text-white p-4 flex justify-between items-center rounded-t">
            <div className="flex items-center gap-2 font-semibold">
              <FaRegCommentDots className="text-lg" />
              Contact us now
            </div>
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose className="text-2xl hover:text-gray-200" />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            <p className="text-lg font-semibold text-[#4b4843] mb-6">
              Want to learn more about our talent solutions? Let us help:
            </p>
            <a href="#">
              <button className="bg-[#485d69] hover:bg-[#0077b5] ml-30 text-white font-semibold py-3 px-6 rounded">
                Contact us
              </button>
            </a>
            <hr className="my-4" />

            <div className="text-center text-md text-blue-500 font-semibold space-y-3">
              <a href="#" className="block hover:underline">
                Chat with a sales consultant.
              </a>
              <a href="#" className="block hover:underline">
                Existing customer? Click here.
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
