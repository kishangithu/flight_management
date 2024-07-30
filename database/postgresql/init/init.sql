-- init.sql
CREATE TABLE flights (
  id SERIAL PRIMARY KEY,
  flight_number VARCHAR(10) NOT NULL,
  status VARCHAR(20) NOT NULL
);

INSERT INTO flights (flight_number, status) VALUES
('AA123', 'On Time'),
('BB456', 'Delayed');
