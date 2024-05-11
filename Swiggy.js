import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className='logo' src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    </div>
)}

const RestaurantCarad = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f169fa459d96b85cff76e91328bffb7f"/>
            <h3>{props.resname}</h3>
            <h4>{props.cousine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
                <RestaurantCarad resname='Meghana Foods' cousine='Biryani, Chinese'rating='4.4 Star' time='38 min'/>
                <RestaurantCarad resname='KFC' cousine="Burger, Fast Food" rating='4.3 Star' time='20 min'/>
            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout />)