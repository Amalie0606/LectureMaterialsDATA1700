BEGIN;

INSERT INTO cyborg (name, birth_year, country, bio)
VALUES ('TestBot', 2024, 'Testland', 'This is a test bot created during a demo.');

-- cyborg_id 6 is manually set for the examples, this would typically be looked up first
INSERT INTO enhancements (name, description, type, manufacturer, cyborg_id)
VALUES
    ('Test Enhancement 1', 'A valid enhancement.', 'demo', 'DemoCorp', 6),
    ('Duplicate Enhancement', 'Fails because name must be unique.', 'demo', 'OopsCorp', 6);

COMMIT;


BEGIN;

-- Insert a new cyborg
INSERT INTO cyborg (name, birth_year, country, bio)
VALUES ('TestBot2', 2024, 'Testland', 'This is a test bot created during a demo.');

INSERT INTO enhancements (name, description, type, manufacturer, cyborg_id)
VALUES
    ('Duplicate Enhancement', 'Fails because name must be unique.', 'demo', 'OopsCorp', 7);
-- This second insert fails if "Duplicate Enhancement" already exists

COMMIT;

/* References: Lecture 13 - Databases 2:
- https://www.tutorialspoint.com/springjdbc/springjdbc_rowmapper.htm
- https://zetcode.com/spring/beanpropertyrowmapper/
*/

--  Weekly task DB2
-- Goal: Build a full-stack CRUD application around a multi-table data model (PostgreSQL → Spring Boot → Bootstrap frontend).
--  Select a topic you care about
--  E.g. LOTR characters and equipment / Pirate ships and crew / Megacorp and Megacorp employees /  chocolate and chocolate reviews
--   Create two PostgreSQL table with 3 or more columns that represent your data (they should have a one-to-many association)
--   Setup CRUD with a Spring boot with Repository and Controllers
--   Add logging
--   Setup full crud ability in the front-end.