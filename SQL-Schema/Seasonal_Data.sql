--- Table generation query
-- Drop tables if they already exist by removing comment (--) of next line
DROP TABLE IF EXISTS Seasonal_Data;


-- generate Seasonal_Data table
CREATE TABLE Seasonal_Data (
	Year INTEGER,
	Yds INTEGER NOT NULL,
	Touchdowns INTEGER NOT NULL,
	Returns INTEGER NOT NULL
);

--Show Results
Select * From Seasonal_Data
