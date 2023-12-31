import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const TeachersCard = ({ instructor }) => {
  const {
    _id,
    name,
    image,
    available_seats,
    category,
    course_time,
    email,
    rating,
    review,
  } = instructor;

  
// TODO IMPLEMENT MODAL............
  const handelModal = instructor =>{
    console.log(instructor);

  }

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="w-72 h-60" src={image} alt="Movie" />
      </figure>
      <div className="card-body font-bold">
        <h2 className="card-title font-extrabold text-[#c25934]">{name}</h2>
        <p>
          Email: <span className="text-[#0c4b65]">{email}</span>
        </p>
        <p>
          category Teacher: <span className="text-[#0c4b65]">{category}</span>
        </p>
        
        <Rating
          placeholderRating={rating}
          emptySymbol={<FaRegStar className="text-[#c25934]" />}
          placeholderSymbol={<FaStar className="text-[#c25934]" />}
          fullSymbol={<FaStar className="text-[#c25934]" />}
        />
        
        <div className="card-actions justify-end">
          <label onClick={() => handelModal(instructor)} htmlFor="my_modal_6" className="btn btn-sm font-bold text-white bg-[#c25934] hover:bg-[#0c4b65]">
          see class
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
            <p>
          Review: <span className="text-[#0c4b65]">{review}</span>
        </p>
        <p>
          Available_seats:{" "}
          <span className="text-[#c25934]">{available_seats}</span>
        </p>
        <p>
          Course_time: <span className="text-[#0c4b65]">{course_time}</span>
        </p>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersCard;
