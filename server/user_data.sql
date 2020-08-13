/* Delete the tables if they already exist */
drop table if exists Users;

/* Create the schema for our tables */
create table Users(userName varchar(30), text varchar(100));

/* Create the schema for our prompts */
create table prompts(prompt varchar(180));

/* Populate the tables with our data */
insert into Users values('TestUser', 'Test text');