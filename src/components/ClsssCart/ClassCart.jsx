const ClassCart = ({ item }) => {
  const { _id, image, name, cost, duration, instructorName, available_seats} = item;
  return (
    <>
      <div className="stats shadow-2xl my-5 h-36 w-[920px] justify-center items-center">
        <div className="stat">
          <div className="flex justify-center items-center gap-8">
            <div className="avatar online">
              <div className="w-28 rounded-full">
                <img src={image} />
              </div>
            </div>
            <div className="">
                <h2 className="text-2xl font-extrabold text-[#0c4b65]">{name}</h2>
                <h4 className="font-bold text-[#c25934]">Cost: {cost}</h4>
            </div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value text-[#0c4b65]">
            <h1>{duration}</h1>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <button className="btn btn-sm bg-[#efcf4f] hover:bg-[#c25934] text-white">select class</button>
          </div>
          <div className="">

            <h2 className="text-[#0c4b65]">instructorName</h2>
            <h3 className="font-bold text-[#c25934]">{instructorName}</h3>
            <p>Seats: {available_seats}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassCart;
