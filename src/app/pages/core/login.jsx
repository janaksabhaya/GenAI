import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="login--section d-flex align-items-center justify-content-center w-100 vh-100">
			<div className="login--card">
				<h3 className="mb-0 text-center text-capitalize text-color font-24">sign in</h3>
				<div className="my-2">
					<label className="text-capitalize text-nowrap d-block mb-2 font-14 text-parimary-black">email address</label>
					<input type="email" className="w-100 d-block font-14 text-secondry-black" />
				</div>
				<div className="mb-2">
					<div className="d-flex align-items-center justify-content-between mb-2">
						<label className="text-capitalize text-nowrap d-block  font-14 text-parimary-black">password</label>
						<Link to="#!" className="d-block text-secondry-light-color text-capitalize text-decoration-none font-14">
							Forgot your password?
						</Link>
					</div>
					<input type="password" className="w-100 d-block font-14 text-secondry-black" />
				</div>

				<button type="button" className="text-capitalize text-nowrap text-center w-100 font-18 text-white-primary">
					sign in
				</button>
			</div>
		</section>
	);
};

export default Login;
