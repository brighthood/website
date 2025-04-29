import { FaPhone } from "react-icons/fa6";

export default function DialButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-tr from-primary to-purple-500 text-white  rounded-full p-4 animate-bounce fixed bottom-8 right-10 shadow-lg transition-all hover:bg-primary-dark hover:translate-x-32 duration-300 z-50"
    >
      {" "}
      <a href="tel:0970377520">
        <FaPhone className="text-2xl" />
      </a>
    </button>
  );
}
