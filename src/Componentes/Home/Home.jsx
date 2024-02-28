import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";
import Header from "../Header/Header";
import banner from "../../assets/images/30.png"
import logo1 from "../../assets/images/35.png"
import logo2 from "../../assets/images/36.png"
import logo3 from "../../assets/images/37.png"
import logo4 from "../../assets/images/38.png"
import img1 from "../../assets/images/Rectangle 9.png"
import img2 from "../../assets/images/Rectangle 10.png"
import img3 from "../../assets/images/Rectangle 11.png"
import img4 from "../../assets/images/Rectangle 12.png"
import img5 from "../../assets/images/Rectangle 13.png"
import img6 from "../../assets/images/Rectangle 14.png"
import img7 from "../../assets/images/Rectangle 15.png"
import img8 from "../../assets/images/Rectangle 16.png"
import { RiCupLine } from "react-icons/ri";

const Home = () => {
    const lodedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(lodedCoffees);

    return (
        <div>
            {/* header & banner */}
            <Header></Header>
            <div style={{backgroundImage: `url(${banner})`}} className="w-full h-[70vh] bg-no-repeat bg-center bg-cover border-4 border-blue-600 grid grid-cols-1 md:grid-cols-2 items-center">
                <div></div>
                <div className="text-white p-4 text-left space-y-8">
                <h2 className="text-2xl font-bold">Would you like a Cup of Delicious Coffee?</h2>
                <p>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="px-4 py-2 bg-[#e3b577] text-black border-none">Learn More</button>
                </div>
            </div>
            {/* header & banner */}

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center bg-[#ECEAE3] px-12 py-4 gap-4">
                <div className=" space-y-3">
                    <img src={logo1} alt="" />
                    <h2>Awesome Aroma</h2>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className=" space-y-3">
                    <img src={logo2} alt="" />
                    <h2>High Quality</h2>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className=" space-y-3">
                    <img src={logo3} alt="" />
                    <h2>Pure Grades</h2>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className=" space-y-3">
                    <img src={logo4} alt="" />
                    <h2>Proper Roasting</h2>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
                
            </div>
            {/* coffee cards */}
            <div className="my-20">
                <div className="text-center">
                    <p>--Sip & Savor--</p>
                    <h2 className="font-bold text-3xl mt-4 mb-6">Our Popular Products</h2>
                    <button className="px-4 py-2 bg-[#e3b577] font-bold border-2 border-black rounded-md text-white items-center justify-center">Learn More <RiCupLine></RiCupLine></button>

                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6
            max-w-5xl mx-auto mt-10"> 
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
            {/* coffee cards */}
            {/* follow us on instagram*/}
            <div className="text-center p-4 md:p-8">
                <p>Follow us Now</p>
                <h2 className="font-bold text-3xl mb-6">Follow on Instagram </h2>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <img className="rounded-lg w-full" src={img1} alt="" />        
                    <img className="rounded-lg w-full" src={img2} alt="" />
                    <img className="rounded-lg w-full" src={img3} alt="" />
                    <img className="rounded-lg w-full" src={img4} alt="" />
                    <img className="rounded-lg w-full" src={img5} alt="" />
                    <img className="rounded-lg w-full" src={img6} alt="" />
                    <img className="rounded-lg w-full" src={img7} alt="" />
                    <img className="rounded-lg w-full" src={img8} alt="" />                   
                </div>
            </div>
            {/* follow us on instagram*/}

            
        </div>
    );
};

export default Home;