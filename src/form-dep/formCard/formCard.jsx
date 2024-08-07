import { RiArrowDownWideFill, RiArrowUpWideFill } from "@remixicon/react";
import MainInfo from "../formComponents/mainInfo";
export default function FormCard({ title, formComponent, isActive, onShow }) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-blue-200 transition duration-300 eas-in-out p-4 mb-4 min-w-96 select-none ">
      <h2
        className=" text-xl font-semibold flex items-center justify-between cursor-pointer "
        onClick={onShow}
      >
        {title}
        {!isActive ? (
          <RiArrowDownWideFill size={24} />
        ) : (
          <RiArrowUpWideFill size={24} />
        )}
      </h2>
      {/* If the component is active then open the form components.  */}
      {isActive && <div>{formComponent}</div>}
    </div>
  );
}
