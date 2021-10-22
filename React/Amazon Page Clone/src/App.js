import {useState} from "react";
import headerStyles from "./module.css Files/Header.module.css";
import Products from "./Products";

function App() {

    const [selectedWatch, setSelectedWatch] = useState(0);

    const [feature, setFeature] = useState(0);

    let time = new Date();

    function setSelectedWatchImpl(index){
        setSelectedWatch(index);
        time = new Date();
    }

    return (
        <div className="App">
            <div className={headerStyles.header}>
                <img
                    style={
                        {height: 80,}
                    }
                    src={"https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"}
                    alt={"amazon logo"}
                />
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <div className={"image-preview"}>
                    <img
                        style={{height: 650}}
                        src={Products.colorOptions[selectedWatch].imageUrl} alt={"watch"}
                    />
                    <div className="centered">{ 
                    feature === 0 ?  
                    time.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) 
                    + ":" + time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
                        :
                        78}</div>
                </div>
                <div className={"watch-stats"}>
                    <h1 style={{fontSize: "2.6rem"}}>
                        {Products.title}
                    </h1>

                    <p style={{fontSize: "1.5rem"}}>{Products.description}</p>

                    <p style={{fontSize: "1.8rem", fontWeight: 600}}>Select Color</p>

                    {Products.colorOptions.map((value, index) => {
                        return (
                                <img
                                    key={Products.colorOptions[index].id}
                                    onClick={() => {setSelectedWatchImpl(index)}}
                                    style={{cursor:"pointer", height: 100, border: index === selectedWatch && "3px solid #007383", borderRadius: 12 }}
                                    src={Products.colorOptions[index].imageUrl} alt={Products.colorOptions[index].styleName}
                                />
                           );
                    })}

                    <p style={{fontSize: "1.8rem", fontWeight: 600}}>Features</p>

                    <button
                        onClick={() => {setFeature(0)}}
                        style={
                        {
                            backgroundColor: feature === 0 ? "grey" : "lightgrey",
                            height: 50,
                            borderRadius: 8,
                            fontWeight: 600,
                            width: 130,
                            fontSize:16,
                            border:"none",
                            cursor:"pointer",
                        }
                    }> Time
                    </button>

                    <button
                        onClick={() => {setFeature(1)}}
                        style={
                        {
                            backgroundColor: feature === 1 ? "grey" : "lightgrey",
                            marginLeft: 30,
                            height: 50,
                            borderRadius: 8,
                            fontWeight: 600,
                            width: 130,
                            fontSize:16,
                            border:"none",
                            cursor:"pointer",
                        }
                    }> Heart Rate
                    </button>

                    <br/>

                    <button style={
                        {
                            backgroundColor: "#007383",
                            marginTop: 30,
                            height: 50,
                            borderRadius: 8,
                            width: 130,
                            border:"none",
                            fontSize:19,
                            color:"white",
                            cursor:"pointer",
                        }
                    }> Buy Now
                    </button>

                </div>
            </div>

        </div>
    );
}

export default App;
