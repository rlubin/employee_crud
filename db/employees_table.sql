CREATE TABLE employees (
  id int NOT NULL,
  first_name VARCHAR(256) NOT NULL,
  last_name VARCHAR(256) NOT NULL,
  email VARCHAR(256),
  gender SET('Male', 'Female', 'Bigender', 'Polygender', 'Genderqueer', 'Genderfluid', 'Non-binary', 'Agender'),
  salary VARCHAR(20),
  job_title VARCHAR(256),
  PRIMARY KEY(id)
);