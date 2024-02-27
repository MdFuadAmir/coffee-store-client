const CoffeeCard = ({ coffee }) => {
    const {name,supplier,chef,photo,tast,details,category} = coffee;
  return (
    <div className="card card-side bg-slate-300 gap-6 shadow-xl mt-10 p-4">
      <figure>
        <img
          src={photo}
          alt="coffee"
        />
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
  <button className="bg-stone-500 text-white rounded-lg  p-2">view</button>
  <button className="bg-gray-800 text-white  rounded-lg p-2">edit</button>
  <button className="bg-red-600 text-white rounded-lg p-2">delete</button>
</div>
      </div>
    </div>
  );
};

export default CoffeeCard;
