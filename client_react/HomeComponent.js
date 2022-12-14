
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';

import './Home.css';


const HomeComponent=() => {
    return (

        <div >
            <div id='bg-image'></div>

            <NavbarComponent/>
          
            <div id='row'>
                <h2 id="topic-text">The Wonderful Trip Planner</h2>
            
                <h1 id="Advtext">Adventure</h1>
                <p id ='line-text'></p>
                <p id="detail-text">With Tom & Journey, you can plan your trip anywhere<br />
                at anytime. We help you save budget by showing you<br />the best deal.</p>
        

                <button id="button-1">Get Started</button>

                <button id="button-2">See more</button>
                
            </div>
            
            
            <Footer/>

        </div>
        
    );
}

export default HomeComponent;