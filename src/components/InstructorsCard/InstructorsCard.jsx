import { FaFacebook, FaFacebookF, FaGooglePlus, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";


const InstructorsCard = ({instructor}) => {
    const {_id, name, image, category} = instructor;
  return (
    <div className="mt-16">
       <div className="w-56 bg-base-100 shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-full h-32 border-4 border-[#efcf4f] hover:border-8" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-[#0c4b65]">{name}</h2>
    <p className="font-bold text-[#c25934]">{category}</p>
    <div className="card-actions space-x-3 mt-4">
        <FaFacebookF/> <FaTwitter/> <FaInstagram/> <FaGooglePlusG/>
    </div>
  </div>
</div>
    </div>
  );
};

export default InstructorsCard;
