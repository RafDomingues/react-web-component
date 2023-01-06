import reactLogo from './assets/react.svg'
import './App.css'
import TestComponent from './test.component';
import { ReactWebComponent } from './lib';
import RwcTypesEnum from './lib/components/rwc-types.enum';
import { ShadowConfigEnum } from './lib/components/react-web-component/web-component-generator';
import test from './test.shadow.scss?inline';
console.log(test);
ReactWebComponent(TestComponent, {
  shadowConfig: ShadowConfigEnum.CLOSED_SHADOW,
  shadowStyle: test,
  attrsTypes: {
    test: RwcTypesEnum.INTEGER
  }
});

function App() {

  return (
    <div className="App">
      <div>
        {/*// @ts-ignore*/}
        <test-component test="18" />
        <div className="info"> test</div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo " alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
