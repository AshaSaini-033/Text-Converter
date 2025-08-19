import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('');
    <h1>{props.heading}</h1>
    const handleonclick=( )=> {
console.log("Uppercase");
props.showAlert('convert to uppercase!','success');
let newText=text.toUpperCase();
setText(newText);
    }
    // const handlemodechange=()=>
    // {
    //     let mode="light";
    //     if(mode=="light")
    //     {
    //         mode=d
    //     }
    // }
    const handleonclick2=( )=> {
        console.log("Lowercase");
        let newText=text.toLowerCase();
        setText(newText);
            }
            const handleonclick4=( )=> {
                console.log("reverse");
                let newText="";
                for(let i=text.length-1;i>=0;i--)
                {
                    newText=newText+text[i];
                }
                setText(newText);
                    }
            const handleonclick3=( )=> {
                console.log("clear");
                let newText='';
                setText(newText);
                    }
                    
    const handleonchange=( event)=> {
        console.log("onchange");
        
        setText(event.target.value);
            }
            const handleonchange2=( )=> {
                console.log("speack");
                
               let msg=new SpeechSynthesisUtterance();
               msg.text=text;
               window.speechSynthesis.speak(msg)
                    }
  return (
    <>
    
    <div className="mb-3">
  <label forhtml="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="3" onChange={handleonchange}></textarea>
</div>
<button className="button mx-3" onClick={handleonclick}>Click for Uppercase</button>
<button className="button" onClick={handleonclick2}>Click for lowercase</button>
<button className="button mx-3" onClick={handleonclick3}>Click for clear</button>
<button className="button mx-3" onClick={handleonclick4}>Click for reverse</button>
<button className="button mx-3" onClick={handleonchange2}>Click for speek</button>



<h2>Your text summerry</h2>
<p>{text.split(" ").length-1} words and {text.length} characters </p>
<p>{0.008*text.split(" ").length} time for reading</p>
<h2>Preview</h2>
<p>{text}</p>
    </>
  
  )
}

