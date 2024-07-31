import { RiArrowDownWideFill } from "@remixicon/react";
import MainInfo from "../formComponents/mainInfo";
export default function FormCard({ title, formComponent }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 eas-in-out p-4 mb-4 cursor-pointer min-w-80">
      <h2 className=" text-xl font-semibold flex items-center justify-between">
        {title}
        <RiArrowDownWideFill size={24} className="expand-icon" />
      </h2>
      {formComponent}
    </div>
  );
}
