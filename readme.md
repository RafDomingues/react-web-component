`WIP (doc and code) - but usable`

This library convert a ReactJs component to a web-component.

The repository contains a folder **lib** with all the plugin source code and a typescript-react project with viteJs to test it.

#### How to Use it
 
1. Create a react-web-component
Example: 
```javascript
   const TestComponent = () => {
    return (
      <div className="info">
       <button className="info">Button</button>
      </div>
     )
    }
```

2. Then call the ReactWebComponent method
Example:
```javascript
ReactWebComponent(TestComponent);
```
3. You can use the web-component on your HTML (The web-component is created with the name of the react-component)
Example:
```html
<test-component></test-component>
```
#### Config
You can add a second parameter, on the ReactWebComponent method, that will let you configure it.
By default (without config) there is no shadowRoot, If you want to add one you must configure it by adding the property shadowConfig with one of thoses values: 
 - 'no-shadow' : will not create shadow DOM
 - 'open', enable access to shadow DOM with the JavaScript
 - 'closed', disable access to shadow DOM with the JavaScript

