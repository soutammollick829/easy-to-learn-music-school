import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useSelectedClass from "../../../components/Hooks/useSelectedClass";

const StudentsTable = ({ row, index }) => {
  const { _id, name, image, email, cost } = row;
const [, refetch] = useSelectedClass();


  const handelDelete = (row) => {
    console.log(row)
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
        fetch(`https://easy-to-learn-music-school-server.vercel.app/selected-class/${row._id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (

      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-16">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td>Course cost:${cost}</td>
        <th>
          <button
            onClick={() => handelDelete(row)}
            className="btn btn-square w-10 text-white bg-red-500 hover:text-red-500 text-xl btn-ghost  border-0"
          >
            <FaRegTrashAlt />
          </button>
        </th>
      </tr>

  );
};

export default StudentsTable;
