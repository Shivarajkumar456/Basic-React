const heading = React.createElement("h1", {id:'heading'}, "Hello React World!");

const parent = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, 
[React.createElement("h1", {id: "header", key: '1'}, "This is Header"),
React.createElement("p", {id: "para", key: '2'}, "This is paragraph")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent)
root.render(parent);
