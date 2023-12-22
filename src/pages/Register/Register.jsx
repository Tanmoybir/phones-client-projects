import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser,profileUpdate} = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value
        

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            profileUpdate(name,image)
            .then(() => {

            })
            .catch(() => {

            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Photo-url" name="image" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center">New Here? <button className="btn btn-link"><Link to={'/login'}>Login</Link></button></p>
                        <button className="btn btn-accent"><Link to={'/social'}>Google</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;