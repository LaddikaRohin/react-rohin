import React from 'react';
import ReactDOM from 'react-dom/client'
// Hello World! print in RecatJS
// const parent = React.createElement(
//     "h1", {}, "Hello world in ReactJS"
// );

// console.log(parent);  //Object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);

{/* ------Question-------
<div id='parent'>
    <div id='child1'>
        <div>This is Child 1 Tag</div>
        <div>How are you</div>
    </div>
    <div id='child2'>
        <div>This is Child 2 Tag</div>
        <div>I'm fine and you</div>
    </div>
</div> */}

// const parent = React.createElement('div', {id: 'parent'}, [
//     React.createElement('div', {id: 'child1'},[
//         React.createElement('h1',{}, 'This is Child 1 Tag'),
//         React.createElement('h1', {}, 'How are you')
//     ]),
//     React.createElement('div', {id: 'child2'},[
//         React.createElement('h1',{}, 'This is Child 2 Tag'),
//         React.createElement('h1', {}, 'Im fine and you')
//     ])
// ])

//Instead of above code using JSX bcz jsx is easy to understand

//JSX => React.createElement => createElement - js object => HTMLElement(render)

//React Element using JSX
// const heading =  (<h1 className='head' tabIndex= '5'>
//     Namste ReactJS using JSX 🚀</h1>
//     );

// Functional Component
const Title = () => (<h1 className='head' tabIndex= '5'>
    Namste ReactJS using JSX 🚀</h1>
    );

//React Functional component
const HeadingComponent = () => (
    <div className='container'>
        <Title />
        <h1 className='heading'>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);