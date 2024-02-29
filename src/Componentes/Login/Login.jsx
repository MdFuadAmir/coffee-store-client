import { useContext } from "react";
import Header from "../Header/Header";
import { AuthContext } from "../Providers/AuthProviders";


const Login = () => {
    const {creatUser} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault();
        const form =  e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        creatUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .then(error =>{
            console.log(error);
        })



    }
    return (
        <div>
            <Header></Header>
            <div className="hero mt-8">
  <div className="w-4/12 bg-white shadow-2xl rounded-lg">
    <div className="">
    <h2 className="text-center text-3xl w-fit mx-auto">Login Now</h2>
      <form onSubmit={handleLogin} className="p-6">
        {/* 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        {/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* 3 */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;