import React from "react";
import ContactForm from "./shared/ContactForm";
import { FaShare } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

export default function Aside() {
  return (
    <aside className="space-y-4 col-start-1 col-end-13 lg:col-start-9 lg:col-end-13">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
        <FaBookmark className="mr-2" /> Bookmark Property
      </button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
        <FaShare className="fas fa-share mr-2" /> Share Property
      </button>

      {/* <!-- Contact Form --> */}
      <ContactForm />
    </aside>
  );
}
