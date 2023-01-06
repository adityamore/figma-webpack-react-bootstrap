import * as React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!);

interface State {
  msg: String,
  count: Number
}

class App extends React.Component<React.ComponentProps<any>, State> {
  constructor(props: React.ComponentProps<any>) {
    super(props);
    this.state = {
      msg: "Hello world",
      count: 5
    }
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    parent.postMessage({ 
      pluginMessage: { 
        type: 'perform-action', 
        count: this.state.count, 
      } 
    }, '*')
  }
  render() {
    return (
      <div className="app-container">
        {this.state.msg}
        <div>
          <button onClick={this.handleClick}>Action</button>
        </div>
      </div>
    )
  }
}

root.render(<App />);