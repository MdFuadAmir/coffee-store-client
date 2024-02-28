import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const CoffeeCard = ({ coffee, coffees, setCoffees}) => {
  const { _id, name, chef, photo,} = coffee;

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
   <div>
     <div className="card card-side items-center bg-[#f5f4f2] gap-6 p-4">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="flex justify-between w-full gap-4">
        <div>
          <p>Name: {name}</p>
          <p>Chef: {chef}</p>
          <p>Price: {chef}</p>
        </div>
        <div className="join join-vertical space-y-4">
          <button className="bg-[#d2b48c] text-white border-none rounded-lg  p-2">
            <FaRegEye className="text-xl"></FaRegEye>
          </button>
          <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3c393b] text-white border-none  rounded-lg p-2">
            <FaPen className="text-xl"></FaPen>
          </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#ea4744] text-white rounded-lg border-none p-2"
          >
            <MdDelete className="text-xl"></MdDelete>
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes ={
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.object.isRequired,
  setCoffees: PropTypes.object.isRequired,
}
