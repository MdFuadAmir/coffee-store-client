import banner from "../../assets/images/15.jpg"
import logo from "../../assets/images/logo1.png"

const Header = () => {
    return (
        <div style={{backgroundImage: `url(${banner})`,backgroundRepeat: "no-repeat"}} className="">
            <div className="flex mx-auto justify-center space-x-3 items-center">
                <img src={logo} className="w-8 h-10" alt="" />
            <h2 className="text-2xl text-center font-bold text-white">Espresso Emporium</h2>
            </div>
        </div>
    );
};

export default Header;