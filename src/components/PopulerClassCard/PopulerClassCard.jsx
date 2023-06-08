
import { FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";


const PopulerClassCard = ({ popular }) => {
  const { _id, name, image, details, instrument, duration, cost } = popular;

  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="h-56" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#c25934]">{name}</h2>
          <p className="text-[#0c4b65]">{details.slice(0, 70)}...</p>
          <div className="flex justify-center items-center gap-5 mt-3">
            <span className="flex items-center gap-2 font-bold text-[#0c4b65]">
              <FaCalendarAlt className="text-[#c25934]" />
              {duration}
            </span>
            <span className="flex items-center gap-2  font-bold text-[#0c4b65]">
              <FaMoneyBillAlt className="text-[#c25934]" />
              {cost}
            </span>
          </div>
          <div className="card-actions justify-center mt-3">
            <button className="btn btn-sm text-white bg-[#efcf4f] hover:bg-[#0c4b65]">
              More info
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopulerClassCard;
