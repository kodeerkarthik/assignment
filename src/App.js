import './App.css';
import Btn from './task1/Btn';
import Grid from './task2/Grid';

function App() {
  return (
    <div className="App p-4">
      <div className="row">
        <div className="col">
          <p>Button with small size:</p>
          <Btn size="small" title="Small Button"/>
        </div>

        <div className="col">
          <p>Button with default size:</p>
          <Btn size="default" title="Default Button"/>
        </div>

        <div className="col">
          <p>Button with large size:</p>
          <Btn size="large" title="Large Button"/>
        </div>

        <div className="col">
          <p>Button with icon:</p>
          <Btn size="default" title="Switch Button" icon='true'/>
        </div>

        <div className="col">
          <p>Button without icon:</p>
          <Btn size="default" title="Button" />
        </div>

        <div className="col">
          <p>Disabled Button:</p>
          <Btn size="default" title="Disabled" disable='true'/>
        </div>

        <div className="col">
          <p>Button with loading:</p>
          <Btn size="default" title="Loading..." load="true"/>
        </div>

      </div>
      <Grid/>
      
    </div>
  );
}

export default App;
