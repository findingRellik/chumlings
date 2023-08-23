import React from 'react';
import './master.css';

class EditableTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          name: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateIsEdit = this.updateIsEdit.bind(this);
    }
    
      handleChange(e) {
        this.setState({
          name:e.target.value
        })
    }
      updateIsEdit(e, value="null") {
        this.setState({
            isEdit: value
        });
    }
    
      render() {
        return (
          <div className='editable-text-box'>
            {/* <input type="text" name="userName" value={this.state.name} placeholder="Enter your name..." onChange={this.handleChange} onBlur={this.updateIsEdit}/> */}
            <input type="text" name="text" value={this.state.name} onChange={this.handleChange} placeholder="Enter text..."/>
            <button className="edit-button" onClick={this.handleChange}>EDIT</button>
            <p id="text">{this.state.name}</p>
          </div>
        );
    }

}

export default EditableTextBox;