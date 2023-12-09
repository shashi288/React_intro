// const element=React.createElement("h1",{id:"heading", className:"head"},"hello world using react");
// console.log(element);//This will console object as create element creates an object 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);// this will render the elment to the root and also change the object to browser understandable html element
import React from "react";
import ReactDOM from "react-dom/client"

//REACT ELEMENTS
// WE USED React.createElement TO MAKE HTML ELEMENTS
// const parent= React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")]
// ),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")])
// ]);
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// USING  JSX IN REACT(REACT ELEMENTS)
// const jsx= <h1 id="heading" className="head">Namaste React Using JSX</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsx);

//REACT COMPONENTS (using elemnts inside elements ,elements inside components,components inside components)
const desc=(
    <p>React is easy</p>
);
const intro=(
    <div>
    <h3>Intro to React</h3>
    {desc}
    </div>
);
const Title = ()=> (
    <div>
    {intro}
    <h1>Namaste React Using Functional Component</h1>
    <h2>Hello React</h2>
    </div>
);
const a =10+20; //javascript variable
const Head = ()=>{
    return(
        <div>
            <Title/> 
            <h1>Learning React</h1>
            {a}
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head/>)