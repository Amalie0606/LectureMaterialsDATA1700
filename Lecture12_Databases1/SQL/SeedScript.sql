DROP TABLE enhancements CASCADE;

-- Step 1: Create Enhancements Table
CREATE TABLE enhancements (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) UNIQUE NOT NULL,
    description TEXT,
    type VARCHAR(50),
    manufacturer VARCHAR(150)
);

-- Step 2: Insert Enhancements (Real-Life and Cyberpunk)
INSERT INTO enhancements (name, description, type, manufacturer)
VALUES
    -- Real-life medical enhancements
    ('Pacemaker', 'A device that helps control abnormal heart rhythms.', 'medical', 'Medtronic'),
    ('Automatic Insulin Pump', 'A system that delivers insulin automatically to manage diabetes.', 'medical', 'Insulet Corporation'),
    ('Cochlear Implant', 'A device that helps people with severe hearing loss by providing a sense of sound.', 'medical', 'Cochlear Ltd.'),
    ('Bionic Prosthetic Limb', 'An advanced robotic prosthetic controlled by nerve signals.', 'medical', 'Össur'),
    ('Retinal Implant', 'A vision-enhancing implant for people with degenerative eye diseases.', 'medical', 'Second Sight'),
    ('Deep Brain Stimulator (DBS)', 'Used for treating Parkinson’s and other neurological disorders.', 'medical', 'Medtronic'),
    ('Powered Exoskeleton', 'A wearable robotic suit that helps people with mobility impairments.', 'medical', 'ReWalk Robotics'),

    -- Futuristic and cyberpunk enhancements
    ('Neural Uplink', 'A brain-computer interface allowing direct thought communication.', 'other', 'NeuroLink Corp'),
    ('Laser Fingernail', 'A retractable mini laser embedded in a fingernail.', 'silly', 'Mad Scientist Inc'),
    ('Built-in Karaoke Speaker', 'A voice-enhancing system with auto-tune.', 'entertainment', 'SingTech Industries'),
    ('Grappling Hook Arm', 'An arm modification allowing users to climb buildings.', 'military', 'Wayne Enterprises'),
    ('Subdermal LED Tattoos', 'Programmable glowing tattoos under the skin.', 'entertainment', 'GlowTech Inc'),
    ('Third Eye Camera', 'A massive, top-of-the-head-mounted LIDAR camera for extreme 3D mapping. Very bulky.', 'silly', 'CyberVision Heavy Industries'),
    ('Cyber-Kebab Dispenser', 'A built-in compartment that dispenses fresh kebabs on demand.', 'silly', 'Night City Street Food Co.'),
    ('Shawarma Warmer Arm', 'A cybernetic arm with a built-in shawarma warmer to keep it fresh at all times.', 'silly', 'Nomad Eats Inc.');

-- Step 3: Query to See All Enhancements
SELECT id, name, description, type, manufacturer
FROM public.enhancements;

-- PostgreSQL-pgAdmin4 W3Schools : https://www.w3schools.com/postgresql/postgresql_pgadmin4.php
-- Download: postgresql 17.4-1-windows-x64.exe (port number server is listed: 5432) Selected: Database Server
-- PostgreSQL is an object-relational database management system.
-- Supports a large part of the SQL standard and offers many modern features: 
--> complex queries, foreign keys, triggers, updatable views, transactional integrity, multiversion concurrency control
-- can be extended by the user in many ways, for example by adding new:
--> data types, functions, operators, aggregate functions, index methods, procedural languages 
-- More info: file:///C:/Program%20Files/PostgreSQL/17/doc/src/sgml/html/index.html 

-- Example SQL Statement: 
SELECT version();

-- SQL commands divided (language): https://www.linkedin.com/pulse/types-sql-commands-ankush-thavali-8enef 
--> 1. Data Definition: CREATE, DROP, ALTER, TURNICATE;
--> 2. Data Manipulation: INSERT, UPDATE, DELETE;
--> 3. Data Control: GRANT, REVOKE;
--> 4. Transaction Control: COMMIT, ROLLBACK, ENDPOINT;
--> 5. Data Query: SELECT;

-- CREATE: Used to create database objects like tables, views, or indexes.
-- ALTER: Modifies the structure of existing database objects.
-- DROP: Deletes database objects, such as tables or views.
-- TRUNCATE: Removes all records from a table but retains the table structure.

-- SELECT: Retrieves data from one or more tables.
-- INSERT: Adds new records into a table.
-- UPDATE: Modifies existing records in a table.
-- DELETE: Removes records from a table.

-- GRANT: Provides specific privileges to database users.
-- REVOKE: Withdraws previously granted privileges.

-- COMMIT: Finalizes a transaction, making all changes permanent.
-- ROLLBACK: Reverts the database to its state before the beginning of a transaction.
-- SAVEPOINT: Sets points within transactions to which you can later roll back.

-- SELECT: Primarily used for querying the database to retrieve specific information.

-- Example database: https://www.ebi.ac.uk/ipd/imgt/hla/ 







