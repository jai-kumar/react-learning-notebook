const heading1 = React.createElement("h1", { id: 'heading-1'}, "Heading 2");
const heading2 = React.createElement("h2", { id: 'heading-2'}, "Heading 2");

const root = ReactDOM.createRoot(document.getElementById("root"));


const container = React.createElement("div", {id: "container"}, [
    heading1,
    heading2 
]);

root.render(container);