import {React,useState} from "react"
function Form(){
    const [value,setValue]=useState("10")
    const [com,setCom]=useState("")
    const handleclick=()=>{
        alert("form submitted");
        setValue(10)
        setCom("")
    }
    return(
        <div className="app">
            <form onSubmit={handleclick}>
                <fieldset>
                    <div className="rating">
                        <label>Rating: {value}</label>
                        <input type="range" min="0" max="10" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    </div>
                    <div className="comment">
                        <label>Comment:</label>
                        <textarea value={com} onChange={(e)=>setCom(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default Form;