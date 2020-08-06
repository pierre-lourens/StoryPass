/* Delete the tables if they already exist */
drop table if exists Users;

/* Create the schema for our tables */
create table Users(userName varchar(30), text varchar(100));

/* Populate the tables with our data */
insert into Users values('TestUser', 'Test text');