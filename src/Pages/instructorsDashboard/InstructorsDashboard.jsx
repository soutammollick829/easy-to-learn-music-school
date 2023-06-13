import { useForm } from "react-hook-form";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_iamge_hosting_api;

const InstructorsDashboard = () => {
const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
  const onSubmit = data => {
console.log(data);
    const formData = new FormData();
    formData.append('image', data.image)

    fetch(image_hosting_url, {
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        console.log(imgResponse);
        if(imgResponse.success){
            const imgUrl = imgResponse.data.display_url;
            const {details,instructorEmail,instructorName,name,cost,available_seats} = data;
           const addNewClass = {details,image:imgUrl,instructorEmail,instructorName,name,cost: parseFloat(cost),available_seats};
           console.log(addNewClass);
           axiosSecure.post('/populer-class',addNewClass)
           .then(data => {
            console.log('posting a new item', data.data)
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added a new class',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
           })
        }
    })
  };
  return (
    <>
      <h1>Add a new class</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="w-96">
      <div className="form-control p-2">
        <label className="label">
          <span className="label-text">Class name</span>
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="type your class name"
          className="input border-warning"
        />
      </div>
      <div className="form-control p-2">
        <label className="label">
          <span className="label-text">Image Url</span>
        </label>
        <input
          type="text"
          {...register("image")}
          placeholder="image"
          className="input border-warning"
        />
        <div className="divider">OR</div>
        <input type="file" {...register("file")} className="file-input file-input-bordered file-input-warning w-[370px]" />
      </div>
      <div className="flex gap-1 px-2">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Instructors name</span>
          </label>
          <input
            type="text"
            {...register("instructorName")}
            placeholder="Instructors name"
            className="input border-warning"
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Instructors email</span>
          </label>
          <input
            type="email"
            {...register("instructorEmail", { required: true })}
            placeholder="Instructors email"
            className="input border-warning"
          />
        </div>
      </div>
      <div className="flex gap-1 px-2">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input
            type="number"
            {...register("available_seats")}
            placeholder="Available seats"
            className="input border-warning"
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("cost")}
            placeholder="Price"
            className="input border-warning"
          />
        </div>
      </div>
    <div className="mt-5 px-">
      <textarea {...register("details")} className="textarea textarea-warning w-[370px]" placeholder="Class details"></textarea>
      </div>
      <button className="btn">add class</button>
    </form>
    </>
  );
};

export default InstructorsDashboard;
