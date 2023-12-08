// const element=React.createElement("h1",{id:"heading", className:"head"},"hello world using react");
// console.log(element);//This will console object as create element creates an object 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);// this will render the elment to the root and also change the object to browser understandable html element

const parent= React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")]
),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I m h1 tag"),React.createElement("h2",{},"I m h2 tag")])
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);