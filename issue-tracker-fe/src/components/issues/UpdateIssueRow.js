import React from 'react'

export default function EditIssueRow({ issue, updateIssueData, handleUpdateFormChange, handleCancelClick }) {
    
    return (
            <tr>
                <td>
                    <input 
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
                    <input 
                        type="text" 
                        name="status" 
                        placeholder="Enter issue status..."
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
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                </td>
            </tr>
    )
}