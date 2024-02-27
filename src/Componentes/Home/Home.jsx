import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {
    const lodedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(lodedCoffees);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6
            max-w-5xl mx-auto">
            {
                coffees.map(coffee => <CoffeeCard 
                    key={coffee._id} 
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                    ></CoffeeCard>)
            }
            </div>
            
        </div>
    );
};

export default Home;