
/* <div id="parent">
    <div className="child1">
        <h1>I am h1 in child1</h1>
        <h2>I am h2 in child1</h2>
    </div>
    <div className="child2">
        <h1>I am h1 in child2</h1>
        <h2>I am h2 in child2</h2>
    </div>
</div> */

const heading = React.createElement("h1", { id: "heading" }, "Hello World!! Let's React");
const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(heading);

// nested structure
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I am nested h1")));
root.render(parent);


// creating siblings inside a nested structure 
const parentNested = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am nested h1"), React.createElement("h2", {}, "I am nested h2")]));
root.render(parentNested);

//Create nested structure having two sibling divs (child1 & child2), where each div has two sibling heading tag (h1 & h2)
const parentChildNested = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I am nested h1 in child1"), React.createElement("h2", {}, "I am nested h2 in child1")]), React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I am nested h1 in child2"), React.createElement("h2", {}, "I am nested h2 in child2")])]);
root.render(parentChildNested);

