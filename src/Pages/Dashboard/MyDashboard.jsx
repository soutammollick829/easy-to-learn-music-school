import { Helmet } from "react-helmet";
import useSelectedClass from "../../components/Hooks/useSelectedClass";
import Marquee from "react-fast-marquee";
import StudentsTable from "./studentsTable/studentsTable";


const MyDashboard = () => {
  const [selectedClass] = useSelectedClass();
  const total = selectedClass?.reduce(
    (sum, item) => parseInt(item.cost) + sum,
    0
  );

  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | dashboard</title>
      </Helmet>
      <div>
        <Marquee>
          <h3 className="uppercase text-4xl font-bold text-[#0c4b65]">
            welcome to easy to learn music school students dashboard.
          </h3>
        </Marquee>
        <div className="stats shadow mx-16 mt-10">
          <div className="stat">
            <div className="stat-title font-bold">Total selected class:</div>
            <div className="stat-value text-center text-[#0c4b65]">
              {selectedClass.length}
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title font-bold">Total course Cost:</div>
            <div className="stat-value text-[#c25934]">${total}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <button className="btn btn-sm bg-[#efcf4f] text-[#0c4b65]">pay & join</button>
            <button className="btn btn-sm w-36 bg-[#0c4b65] text-white hover:text-[#0c4b65]">enrolled class</button>
          </div>
        </div>
        <div>
          <div className="w-96">
            <table className="table">
              {/* head */}
              <thead>
                <td>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Student email</th>
                  <th>cost</th>
                  <th></th>
                  <th>delete</th>
                </td>
              </thead>
              <tbody>
                {
                    selectedClass?.map((row , index) => <StudentsTable
                    key={row._id}
                    row={row}
                    index={index}
                    ></StudentsTable>)
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
