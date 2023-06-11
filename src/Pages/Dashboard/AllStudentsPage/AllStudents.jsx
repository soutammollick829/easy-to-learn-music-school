import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt, FaUserTag } from "react-icons/fa";
import Swal from "sweetalert2";

const AllStudents = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`http://localhost:5000/users`);
    return res.json();
  });

  const handelMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
        method:'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                title: `${user?.name} is an admin`,
                imageUrl: `${user?.photo}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        }
    })
  }
// TODO HANDEL DELETE IMPLEMENT............
  const handelDelete = user =>{
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
          fetch(`http://localhost:5000/users/admin/${user?._id}`, {
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
      <h2 className="text-2xl">
        All students information here: {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Email</th>
              <th>role</th>
              <th>delete user</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="rounded-full w-12 h-12">
                        <img
                          src={user?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>
                  {
                    user?.role === 'admin' ? 'admin' :
                    <button onClick={() => handelMakeAdmin(user)} className="btn btn-sm btn-square bg-[#efcf4f] hover:text-red-500 text-xl btn-ghost  border-0">
                    <FaUserTag />
                  </button>
                  }
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(user)}
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

export default AllStudents;
