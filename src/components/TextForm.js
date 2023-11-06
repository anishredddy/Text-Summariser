import React,{useState} from 'react'


export default function TextForm() {
    const handleUpperClick=() =>{
        console.log('Button was Clicked' +text);
        let new_text=text.toUpperCase();
        setText(new_text)

    }
    

    const handleOnCange=(event) =>{
        console.log('onChange');
        setText(event.target.value);

    }

    const [text,setText]=useState('enter text here');

    const Copy=()=>{
        navigator.clipboard.writeText(text);
    }


    return (
    <>
    <div className='container'>
        <h1>Hello - {text}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnCange} id="exampleFormControlTextarea1"  rows="5"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpperClick}>Convert To UperCase</button>

        <button className='btn btn-primary' style={{ margin: '50px' }} onClick={Copy}>Copy</button>

    </div>

    <div className='container my-10'>
        <p></p>
        <h1>Your Text Summary</h1>
        <p>Words {text.split(' ').length}</p>
        <p>Char {text.length}</p>

        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
