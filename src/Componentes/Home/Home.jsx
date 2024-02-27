import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";


const Home = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6
            max-w-5xl mx-auto">
            {
                coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
            </div>
            
        </div>
    );
};

export default Home;