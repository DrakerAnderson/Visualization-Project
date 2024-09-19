--- Table generation query
-- Drop tables if they already exist by removing comment (--) of next line
DROP TABLE IF EXISTS Kickoff_Returns_Data;


-- generate Kickoff_Return_Data table
CREATE TABLE Kickoff_Returns_Data (
	Team VARCHAR(15),
	Avg DECIMAL NOT NULL,
	Returns INTEGER NOT NULL,
	Yds INTEGER NOT NULL,
	Touchdowns INTEGER NOT NULL,
	Longest_Return Integer NOT NULL,
	Fair_Catch INTEGER NOT NULL,
	Fumbles INTEGER NOT NULL,
	Year INTEGER
);

--Show Results
Select * From Kickoff_Returns_Data

