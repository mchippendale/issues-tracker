import React from 'react'

export default function IssuesForm(props) {
  
    return (
        <div className="create-issue-form-container App">
          <form onSubmit={props.handleSubmit}>
            <label>
              <p>New Issue</p>
                <input 
                  onChange={props.handleChange} 
                  value={props.issue.title} 
                  type="text" 
                  name="title" 
                  placeholder="Title">
                </input>
                <input 
                  onChange={props.handleChange} 
                  value={props.issue.description} 
                  type="text" 
                  name="description" 
                  placeholder="Description">  
                </input>
                <input 
                  onChange={props.handleChange} 
                  value={props.issue.status} 
                  type="text" 
                  name="status" 
                  placeholder="Status">
                </input>
            </label>
            <button type="submit">Submit</button>
          </form><br></br>
        </div>
      );
}