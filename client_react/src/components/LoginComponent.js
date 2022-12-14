import './Login.css';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';


const LoginComponent=()=>{

    return (
        <div>
            <div class="loginNav">
            <NavbarComponent/>
            </div>
        <div class="form-login">
            <h1 id="title-login">LOGIN</h1>
            <h3 id="subtitle-login">sign in to your account</h3>

            <div>
                <label for="email">Email : </label>
                <input type="email" id="email" ></input>
            </div>

            <div>
                <label for="password">Password :</label>
                <input type="password" id="password"></input>
            </div>
            
            <a href="#" id="forgetpass">Forget password</a>
            <span id="remem-check"> 
                <input type="checkbox" id="checkbox-remember">
                    </input> 
                    Remember me.  
                 </span> 
            

            <div>
                <input type="submit" id="submit" value="Login"></input>
            </div>

            <div>
            <span class="signup-text"> 
            Dont’t have an account? <a href="/register" id="Signup-click">Sign Up</a> Now
                 </span> 
            
                 
            </div>
            

            

                
        </div>
        <Footer />
        
        </div>

    );
}
export default LoginComponent;