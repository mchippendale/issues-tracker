# Issues Tracker
A simple Single Page Application (SPA) that tracks issues:
- Issues have a title and description. 
- Each issue has the open to to set the status (open or closed).
- Users can create and update an issue as well view and view them in a table format. 

![update view](https://github.com/mchippendale/issues-tracker/blob/main/update.png)
![update view](https://github.com/mchippendale/issues-tracker/blob/main/save.png)


## Application Architecture
The application has been built with a separate front and back-end. 
- Front-end: React.JS
- Back-end: Ruby on Rails API

### Back-end:
The back-end application has been built with a Ruby on Rails back-end API. The Rails server is hosted on http://localhost:3000/. The server can be started by running ***'rails s'*** command in the terminal. 

The postgresql database assigned when creating the application. The following terminal command ensured that the default database sqlite was not utilised. 
***rails new . --api --database=postgresql***

### Front-end:
The Front-end of the application was built using the React.JS library. It is hosted on http://localhost:3001/. The server can be started by running ***'npm start'*** command in the terminal. 

Once both development servers have been started the front and back-end of the application can communicate between one another. 

## Database: 
The database is built using the PostgreSQL database system. The application stores data in a single table called Issues. See the schema.rb file, located in the ***/issues-tracker-folder/issue-tracker-be/db/seeds.rb***

## Key Dependencies
Backend: Ruby on Rails
- Standard Ruby on Rails gems 
- Rack Cors - for handling Cross-Origin Resource Sharing (CORS) ( Port 3000 - 3001), making cross-origin AJAX possible. 

Frontend: ReactJS
- Axios: enable XMLHttpRequests to be made the Rails API backend. 
- react: enable react components in the application. 
    - useEffect
    - useState
    - Fragment
    - React
- react-dom: render/re-render page in the browser 
- react-scripts




