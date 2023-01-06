`WIP (doc and code) - but usable`

This library convert a ReactJs component to a web-component.

The repository contains a folder **lib** with all the plugin source code and a typescript-react project with viteJs to test it.

#### How to Use it
 
1. Create a react-web-component
   Example: 
`const TestComponent = () => {
    
    return (
    <div className="info">
    <button className="info">
    </button>
    </div>
    )
    }
    
    export default TestComponent;`

2. Then call the ReactWebComponent method like this:
   `ReactWebComponent(TestComponent);`

#### Config
