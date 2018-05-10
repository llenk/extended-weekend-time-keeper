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

INSERT INTO "projects" ("name", "description")
VALUES 
('Koala Holla', 'Web application for koala sanctuary, using MEAN stack.'),
('Time Keeper', 'Web application for keeping track of tasks and the time they took, using so-called SEAN stack (SQL, Express, Angular, Node).');
	
SELECT * FROM "projects";

INSERT INTO "entries" ("name", "start_time", "end_time", "project")
VALUES
('Create database schema', '2018-4-18 13:00:00', '2018-4-18 14:00:00', 1);

SELECT * FROM "entries";