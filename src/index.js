import React, { useEffect ,useState } from "react";
import './index.css';
import Card from "./components/card";
import  ReactDOM  from "react-dom";
import data from "./data";


const App = () => {

    const [profileIndex,setProfileIndex] = useState(0);
    const [currentMonthIndex,setMonthIndex] = useState(0);

    var thisMonth ;
    var thisMonthsPayer;
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        setProfileIndex(payer())
      }, []);


    const payer = () =>{
        const currentDate = new Date();
        thisMonth = currentDate.getMonth() 
        setMonthIndex(thisMonth);
      

        if (thisMonth === 0 || thisMonth === 6){
            thisMonthsPayer = 5
        } else if (thisMonth === 1 || thisMonth === 7) {
            thisMonthsPayer = 0
            
        } else if (thisMonth === 2 || thisMonth === 8) {
            thisMonthsPayer = 1
        } else if (thisMonth === 3 || thisMonth === 9) {
            thisMonthsPayer = 2
        }else if (thisMonth === 4 || thisMonth === 10) {
            thisMonthsPayer = 3
        } else if (thisMonth === 5 || thisMonth === 11) {
            thisMonthsPayer = 4
        }
        return thisMonthsPayer;
    }

    const review = data[profileIndex];
    
    const change = (num) =>{
        var newIndex = 0;
        var newMonthIndex = 0;
        console.log(currentMonthIndex)
        if (num === -1){
            newIndex = (profileIndex === 0 ? data.length - 1 : profileIndex - 1);
            newMonthIndex = (currentMonthIndex === 0 ? 11 : currentMonthIndex -1)
        } else {
            newIndex = (profileIndex === data.length - 1 ? 0 : profileIndex + 1);
            newMonthIndex = (currentMonthIndex === 11 ? 0 : currentMonthIndex + 1)
        }
   
        setProfileIndex(newIndex);
        setMonthIndex(newMonthIndex)
    }

    return(
        <main className="main">
            <Card review = {review} change = {change}   
                currentMonth ={monthNames[currentMonthIndex]}/>
        </main> )
}

ReactDOM.render(<App/>,
    document.getElementById("root"));
