import React from 'react'

export default function EditIssueRow({ issue, updateIssueData, handleUpdateFormChange, handleCancelClick }) {
    
    return (
            <tr>
                <td>
                    <input 
                        className="input"
                        type="text" 
                        name="title" 
                        placeholder="Enter issue title..."
                        required="required"
                        value={updateIssueData.title}
                        onChange={handleUpdateFormChange}
                        >
                    </input>
                </td>
                <td>
                    <input 
                        className="input"
                        type="text" 
                        name="description" 
                        placeholder="Enter issue description..."
                        required="required"
                        value={updateIssueData.description}
                        onChange={handleUpdateFormChange}
                        >
                    </input>
                </td>
                <td>
                    {/* <select className="input">
                        <option value="1">select status</option>
                        <option value="1">open</option>
                        <option value="2">closed</option>
                    </select> */}
                    <input 
                        className="input"
                        type="text" 
                        name="status" 
                        placeholder="status...open/closed"
                        required="required"
                        value={updateIssueData.status}
                        onChange={handleUpdateFormChange}
                        >
                    </input>
                </td>
                <td>
                    {issue.created_at}
                </td>
                <td>
                    {issue.updated_at}
                </td>
                <td>
                    <button className="save-btn btn" type="submit">Save</button>
                    <button className="cancel-btn btn" type="button" onClick={handleCancelClick}>Cancel</button>
                </td>
            </tr>
    )
}