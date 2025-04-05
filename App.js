// React create element create the Object => then it's HTML element

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         React.createElement("h1", {}, "I'm a header!")
//     )
// )

// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         [
//             React.createElement("h1", {}, "I'm a h1 tag!"),
//             React.createElement("h2", {}, "I'm a h2 tag!")
//         ]
//     )
// )

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child1"}, 
            [
                React.createElement("h1", {}, "I'm a h1 tag!"),
                React.createElement("h2", {}, "I'm a h2 tag!")
            ]
        ),
        React.createElement("div", {id: "child2"}, 
            [
                React.createElement("h3", {}, "I'm a h3 tag!"),
                React.createElement("h4", {}, "I'm a h4 tag!")
            ]
        )
    ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);