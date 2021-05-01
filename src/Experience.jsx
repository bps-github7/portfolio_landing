import { Component } from 'react';
import data from './portfolio.json';


export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }
  render() { 
    const [ vector, drexel, rtf, darden, insomnia, cityYear, allied, goPuff  ] = data.experience; 
    return (
      <div className="app-contact four-panel" style={{ display : 'grid', gridTemplateColumns : '1fr', gridTemplateRows : '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}>
        <div>
          <div>
          <h3>{ vector.company }:</h3>
          <strong>
          { vector.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { vector.employed }

          <strong>Location:</strong>
          { vector.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { vector.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { vector.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { vector.rfl }
        </div>
      </div>
    
      <div>
        <div>
          <h3>{ drexel.company }:</h3>
          <strong>
          { drexel.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { drexel.employed }

          <strong>Location:</strong>
          { drexel.location }

        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            <li>Complicated cause there two jawns</li>
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { drexel.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { drexel.rfl }
        </div>
      </div>
      <div>
        <div>
          <h3>{ rtf.company }:</h3>
          <strong>
          { rtf.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { rtf.employed }

          <strong>Location:</strong>
          { rtf.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { rtf.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { rtf.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { rtf.rfl }
        </div>
      </div>

    
      <div>
        <div>
          <h3>{ darden.company }:</h3>
          <strong>
          { darden.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { darden.employed }

          <strong>Location:</strong>
          { darden.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { darden.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { darden.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { darden.rfl }
        </div>
      </div>
      <div>
        <div>
          <h3>{ darden.company }:</h3>
          <strong>
          { darden.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { darden.employed }

          <strong>Location:</strong>
          { darden.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { darden.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { darden.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { darden.rfl }
        </div>
      </div>

      <div>
        <div>
          <h3>{ insomnia.company }:</h3>
          <strong>
          { insomnia.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { insomnia.employed }

          <strong>Location:</strong>
          { insomnia.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { insomnia.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { insomnia.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { insomnia.rfl }
        </div>
      </div>
 
      <div>
        <div>
          <h3>{ cityYear.company }:</h3>
          <strong>
          { cityYear.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { cityYear.employed }

          <strong>Location:</strong>
          { cityYear.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { cityYear.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { cityYear.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { cityYear.rfl }
        </div>
      </div>
      <div>
        <div>
          <h3>{ allied.company }:</h3>
          <strong>
          { allied.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { allied.employed }

          <strong>Location:</strong>
          { allied.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { allied.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { allied.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { allied.rfl }
        </div>
      </div>
      
      <div>
        <div>
          <h3>{ goPuff.company }:</h3>
          <strong>
          { goPuff.position }
          </strong>
        </div>
        <div>
          <strong>Employed:</strong>
          { goPuff.employed }

          <strong>Location:</strong>
          { goPuff.location }
        </div>
        <div>
          <h5>Duties</h5>
          <ul>
            { goPuff.duties.map(item => <li>{item}</li>) }
          </ul>
        </div>
        <div>
          <strong>Supervisor:</strong>
          { goPuff.supervisor }
        </div>
        <div>
          <strong>Reason for leaving:</strong>
          { goPuff.rfl }
        </div>
      </div>
 

    </div>

    );
  }
}