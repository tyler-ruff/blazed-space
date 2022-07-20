import './App.css';

function App() {
  return (
    <div className="App">
      <article className="message">
        <div className="message-header">
          <p>Blazed Space</p>
        </div>
        <div className="message-body">
          <span>
            We turn dreams into reality.
          </span>
          <br />
          <br />
          <div>
              <a href="https://blazed.contact/">
                Contact
              </a>
              &nbsp; &nbsp; | &nbsp; &nbsp;
              <span className="hide-mobile">
                <a href="https://triangle.blazed.space">
                  Triangle
                </a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
                <a href="https://rocket.blazed.space/">
                  Rocket
                </a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
                <a href="https://vapor.blazed.space/">
                  Vapor
                </a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
                  <a href="https://jupiter.blazed.space/">
                    Jupiter
                </a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
              </span>
              <a href="https://blazed.city/">
                City
              </a>
              &nbsp; &nbsp; | &nbsp; &nbsp;
              <a href="https://blazed.city/">
                World
              </a>
            </div>
          </div>
        </article>
    </div>
  );
}

export default App;
