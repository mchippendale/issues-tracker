import { React, useEffect, useState, Fragment } from 'react'
import axios from 'axios';
import './IssuesList.css';
import IssueRow from './IssueRow';
import IssuesForm from './IssuesForm';
import UpdateIssueRow from './UpdateIssueRow';

export default function IssuesList () {
    const [issuesList, setIssuesList] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [newIssueData, setNewIssueData] = useState({});

    const [updateIssueData, setUpdateIssueData] = useState({
      title: "", 
      description:"",
      status: "",
    });

    const [updateIssueId, setUpdateIssueId] = useState(null);
    
    useEffect(() => {
      axios
        .get('http://localhost:3000/api/v1/issues')
        .then(res => {
          setIssuesList(res.data);
          setLoaded(true);
        })
    }, []);

    const handleCreateFormChange = (e) => {
      e.preventDefault();

      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      const newFormData = { ...newIssueData };
      newFormData[fieldName] = fieldValue;

      setNewIssueData(newFormData);

      // setNewIssue(Object.assign(newIssue, {[e.target.name]: e.target.value}));
    }

    const handleUpdateFormChange = (e) => {
      e.preventDefault()

      const fieldName = e.target.name;
      const fieldValue = e.target.value;

      const newFormData= { ...updateIssueData };
      newFormData[fieldName] = fieldValue;
      
      setUpdateIssueData(newFormData)

    }

    const handleCreateFormSubmit = (e) => {
      e.preventDefault();
      console.log(newIssueData);
      axios
          .post('http://localhost:3000/api/v1/issues', { issue: newIssueData } )
          .then(res => {
            console.log(res);
            console.log(issuesList)
            setIssuesList([...issuesList, res.data])
          })
          .catch(res => {})

      
    }

    const handleUpdateFormSubmit = (e) => {
      e.preventDefault()

      axios
          .put(`http://localhost:3000/api/v1/issues/${updateIssueId}`, { issue: updateIssueData } )
          .then(res => {
            const updatedIssuesList = [...issuesList]
            const index = issuesList.findIndex((issue) => issue.id === updateIssueId)
            updatedIssuesList[index] = res.data
            setIssuesList(updatedIssuesList)
          })
          .catch(res => {})
      
      setUpdateIssueId(null)

    }

    const handleUpdateClick = (e, issue) => {
      e.preventDefault();
      setUpdateIssueId(issue.id);

      const formValues = {
        title: issue.title, 
        description: issue.description,
        status: issue.status,
      }

      setUpdateIssueData(formValues);

    }

    const handleCancelClick = () => {
      setUpdateIssueId(null)
    }

    const handleDeleteClick = (issueId) => {
      axios
          .delete(`http://localhost:3000/api/v1/issues/${issueId}`, { issue: updateIssueData } )
          .then(res => {
            console.log(res);
            setIssuesList(issuesList.filter(issue => issue.id !== issueId))
          })
          .catch(res => {})
    }

    return (
      <Fragment>
        <IssuesForm 
          handleChange={handleCreateFormChange} 
          handleSubmit={handleCreateFormSubmit} 
          issue={newIssueData}
        />
        <div className="issues-table-container App">
          { loaded && 
            <form className="update-form" onSubmit={handleUpdateFormSubmit}>
              <table className="issues-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {issuesList.map((issue, idx) => 
                    <Fragment>
                      { updateIssueId === issue.id ? 
                        <UpdateIssueRow 
                          issue={issue}
                          key={idx} 
                          updateIssueData={updateIssueData}
                          handleUpdateFormChange={handleUpdateFormChange}
                          handleCancelClick={handleCancelClick}
                        /> 
                        : 
                        <IssueRow 
                          key={issue.title}
                          issue={issue} 
                          idx={idx}
                          handleUpdateClick={handleUpdateClick}
                          handleDeleteClick={handleDeleteClick}
                          />}
                    </Fragment>
                    )}
                </tbody>
              </table>
            </form>
          }
        </div>
      </Fragment>
      );
}