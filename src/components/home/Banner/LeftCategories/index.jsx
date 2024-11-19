/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LeftCategories = ({ name, icon, link }) => {
  return (
    <Link to={link} className="flex flex-row gap-9">
      <span className="text-base poppins">{name}</span>
      {icon && (
        <img src={icon} alt="" className="w-4 cursor-pointer rotate-180" />
      )}
    </Link>
  );
};

export default LeftCategories;
