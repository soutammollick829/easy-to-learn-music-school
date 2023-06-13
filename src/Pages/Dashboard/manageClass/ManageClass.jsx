import { FaRegTrashAlt } from "react-icons/fa";
import useClassesData from "../../../components/Hooks/useClassesData";
import Swal from "sweetalert2";
import useSelectedClass from "../../../components/Hooks/useSelectedClass";

const ManageClass = () => {

    const [, refetch] = useSelectedClass();
    const [classes] = useClassesData();

    const handelDelete = item =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/populer-class/${item?._id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                      refetch();
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
            }
          });
    }

  return (
    <div>
      <h3 className="font-bold text-4xl text-center mt-10 text-[#0c4b65]">
        Total classes here!
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-14 h-14">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.instrument}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.duration}
                  </span>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(item)}
                    className="btn btn-sm btn-square text-white bg-red-500 hover:text-red-500 text-xl btn-ghost  border-0"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
