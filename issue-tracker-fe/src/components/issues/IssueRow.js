
export default function IssueRow({ issue, idx, handleUpdateClick, handleDeleteClick }) {
    
    return (
            <tr key={idx}>
                <td>{issue.title}</td>
                <td>{issue.description}</td>
                <td>{issue.status}</td>
                <td>{issue.created_at}</td>
                <td>{issue.updated_at}</td>
                <td>
                    <button className=" update-btn btn" type="button" onClick={(e) => handleUpdateClick(e, issue)}>Update</button>
                    <button className="delete-btn btn" type="button" onClick={() => handleDeleteClick(issue.id)}>Delete</button>
                </td>
            </tr>
    )
}