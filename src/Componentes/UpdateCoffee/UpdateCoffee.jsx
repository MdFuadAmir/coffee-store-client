import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header/Header";




const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id,name, supplier, chef, photo, tast, details, category } = coffee;
    
    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const tast = form.tast.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,supplier,category,chef,tast,details,photo};
        console.log(updatedCoffee);
        // send data to the server
        fetch(`http://localhost:5000/coffee${_id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
        <Header></Header>
      <form onSubmit={handleUpdateCoffee}>
       <div className="bg-orange-50 pt-8 pb-10 max-w-5xl mx-auto rounded-lg">
        <h2 className="text-center font-bold text-3xl">Update a Coffee {name}</h2>
        <p className="text-center pt-4 px-4 max-w-5xl mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
       <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-20 pt-8 gap-10">
        <div>
            {/* 1 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name='name'
              defaultValue={name}
              placeholder="Coffee Name"
              className="input input-bordered"
              required
            />
          </div>
            {/* 2 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name='supplier'
              defaultValue={supplier}
              placeholder="Coffee Supplier"
              className="input input-bordered"
              required
            />
          </div>
            {/* 3 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name='category'
              defaultValue={category}
              placeholder="Coffee Category"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* 2nd grid colaum */}
        <div>
            {/* 1 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              name='chef'
              defaultValue={chef}
              placeholder="Coffee Chef"
              className="input input-bordered"
              required
            />
          </div>
            {/* 2 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tast</span>
            </label>
            <input
              type="text"
              name='tast'
              defaultValue={tast}
              placeholder="Coffee Tast"
              className="input input-bordered"
              required
            />
          </div>
            {/* 3 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name='details'
              defaultValue={details}
              placeholder="Coffee Details"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        </div>
        <div className="form-control px-6 md:px-20">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              name='photo'
              defaultValue={photo}
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control px-6 md:px-20 mt-4">
          <input type="submit" value="Update a Coffee" className="btn w-full bg-orange-300" />
          </div>
       </div>

      </form>

    </div>
    );
};

export default UpdateCoffee;