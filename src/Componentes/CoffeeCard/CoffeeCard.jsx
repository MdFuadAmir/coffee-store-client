import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const { _id, name, supplier, chef, photo, tast, details, category } = coffee;

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
    <div className="card card-side bg-slate-300 gap-6 shadow-xl mt-10 p-4">
      <figure>
        <img src={photo} alt="coffee" />
      </figure>
      <div className="flex justify-between w-full gap-4">
        <div>
          <h2>Name: {name}</h2>
          <p>Supplier: {supplier}</p>
          <p>Chef: {chef}</p>
          <p>Tast: {tast}</p>
          <p>Category: {category}</p>
          <p>Dettails: {details}</p>
        </div>
        <div className="join join-vertical space-y-4">
          <button className="bg-stone-500 text-white rounded-lg  p-2">
            view
          </button>
          <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-gray-800 text-white  rounded-lg p-2">
            edit
          </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-600 text-white rounded-lg p-2"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

CoffeeCard.propTypes ={
  coffee: PropTypes.object.isRequired
}
