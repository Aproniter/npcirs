CREATE DATABASE db2;
CREATE TABLE test (
    Id SERIAL PRIMARY KEY,
    FirstName CHARACTER VARYING(30),
    LastName CHARACTER VARYING(30),
    Email CHARACTER VARYING(30),
    Age INTEGER
);

INSERT INTO test (FirstName, LastName, Email, Age)
VALUES ('1', 'Galaxy S9', 'Samsung', 4);