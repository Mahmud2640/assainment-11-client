import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="body">
      <div class="main_div">
        <div class="title">Login Form</div>
        <div class="social_icons">
          <a href="#facebook">
            <i class="fab fa-facebook-f"></i> <span>Facebook</span>
          </a>
          <a href="#twitter">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
        <form action="#">
          <div class="input_box">
            <input type="text" placeholder="Email or Phone" required />
            <div class="icon">
              <i class="fas fa-user"></i>
            </div>
          </div>
          <div class="input_box">
            <input type="password" placeholder="Password" required />
            <div class="icon">
              <i class="fas fa-lock"></i>
            </div>
          </div>
          <div class="option_div">
            <div class="check_box">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div class="forget_div">
              <Link to="/signup">Forgot password</Link>
            </div>
          </div>
          <div class="input_box button">
            <input type="submit" value="Login" />
          </div>
          <div class="sign_up">
            Not a member? <Link to="/signup">Signup now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
