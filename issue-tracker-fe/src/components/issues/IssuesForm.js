import React from 'react'
import './IssuesForm.css'

export default function IssuesForm(props) {
  
    return (
        <div className="create-issue-form-container App">
          <form onSubmit={props.handleSubmit}>
            <label>
              <p className="create-issue-form-heading">Add Issue</p>
                <input 
                  className="input"
                  onChange={props.handleChange} 
                  value={props.issue.title} 
                  type="text" 
                  name="title" 
                  placeholder="Title">
                </input>
                <input 
                  className="input"
                  onChange={props.handleChange} 
                  value={props.issue.description} 
                  type="text" 
                  name="description" 
                  placeholder="Description">  
                </input>
                {/* <select className="input">
                  <option value="1">select status</option>
                  <option value="1">open</option>
                  <option value="2">closed</option>
                </select> */}
                <input 
                  className="input"
                  onChange={props.handleChange} 
                  value={props.issue.status} 
                  type="text" 
                  name="status" 
                  placeholder="Status...open/closed">
                </input>
            </label>
            <button className="btn" type="submit">Submit</button>
          </form><br></br>
        </div>
      );
}