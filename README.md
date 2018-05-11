# Time Keeper

## Database notes
The projects table contains id, name, and description. The entries table contains id, name, start_time (TIMESTAMP), end_time (TIMESTAMP), time_quarter_hours (the number of quarter hours the task took, rounded up to quarter hours, so a task that took 30 minutes would have a value of 2 in this column), and project (references id of the projects table). 

### Queries
```
CREATE TABLE "entries" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(200),
	"start_time" TIMESTAMP,
	"end_time" TIMESTAMP,
	"time_quarter_hours" INTEGER,
	"project" INT REFERENCES "projects" ON DELETE CASCADE
);

CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(200),
	"description" VARCHAR(2000)
);
```

## Base Mode

### Project Setup
- [x] Create server
- [x] Set up public folder
- [x] Add vendor JS files
- [x] Set up static HTML file
- [x] Set up basic file structure

### HTML Form for Time
- [x] Make HTML form
- [x] Style nicely HTML form

### Database with Tables
- [x] Create projects database
- [x] Create entries database
- [x] Add create table queries to README

### POST Route
- [x] Logic for time calculation
- [x] Post route server-side
- [x] Client side half
- [x] Connect to input form

### GET Route
- [x] Server-side half
- [x] Client side half
- [x] Display on DOM in table

### Delete Time
- [x] Server side route
- [x] Functional button
- [x] Client side route

### HTML Form for Projects
- [x] Set up HTML form
- [x] Style nicely

### POST Route
- [x] Server side route
- [x] Connect to form
- [x] Client side route

### List of Projects
- [x] Server side get route
- [x] Client side get route
- [x] Display on DOM
- [ ] Add to input form for entries
- [ ] Ability to delete project

### Drop down
- [ ] Add functionality to drop down

## Hard Mode

### Number of Hours for Project
- [ ] Write SQL request
- [ ] Add to server side request
- [ ] Add to client side request
- [ ] Add to HTML table

### Angular Material
- [ ] Do something with angular material

### Sort by columns in time page
- [ ] Figure out how to do so
- [ ] Implement

### Edit project name
- [ ] SQL query
- [ ] Server side request
- [ ] Client side request
- [ ] Edit button that lets name be edited
- [ ] Submit button

### Template for Reports
- [ ] New view/controller
- [ ] Add in hourly rate to projects
- [ ] Server-side get route
- [ ] Client-side get route
- [ ] Display information on DOM
- [ ] Generate PDF invoice

### Chart.js
- [ ] Research/import
- [ ] Create new view/controller
- [ ] Create chart
- [ ] Input start/end date
- [ ] New get route for start/end date
- [ ] Update chart depending on dates

### Edit time entry
- [ ] SQL query
- [ ] Server side request
- [ ] Client side request
- [ ] Edit button that lets name be edited
- [ ] Submit button

### Warn for overlap
- [ ] Implement
