# Project 3 Data Visualization

CONTENTS:
1. Outputs Folder: Consists of 4 (four) CSV files created: kickoff_returns_merged.csv, kickoff_returns_cleaned.csv, seasonal_stats_summary.csv
2. Resources Folder: Consists of the original starter code from "https://www.nfl.com"
3. original_merge.ipynb, stats by season.ipynb, kickoff_data_cleaned.ipynb  : Jupiter notebooks used to clean the data and produce csv files for import.
4. Kickoff_Returns_data.sql: copy of the schema file converted into a format that can be imported into quickdbd app.

## Chris and Draker work together to analyze important rule changes and events in the NFL that altered special teams stats during kickoffs

# Project Requirements
  - This project meets the following technical specifications:
  - Visualizations: Created with Python (e.g. Matplotlib, Pandas plotting, seaborn)
  - Database: Data stored in and extracted from a PostgreSQL database.
  - New Library: Includes the use of seaborn, a Python library not covered in class.
  - Dataset: Powered by a dataset with over 100 records, featuring NFL team statistics from 1970 to 2022
   -User Interaction: Includes user-driven interaction, such as HTML menus and dropdowns to display JavaScript-powered visualizations.

# Dataset Description:
The dataset used in this project includes NFL kickoff return data from 1990 to 2020, with a focus on the following rule changes and events:
  - 1974: Kickoff line moved to the 30-yard line
  - 1984: players strike leading to less teams playing and shortened schedules
  - 1994: Kickoff line moved from the 35-yard line to the 30-yard line
  - 2011: Kickoff line moved from the 30-yard line to the 35-yard line

# The dataset includes the following metrics:
  - Return yards
  - Touchdowns

# Visualizations
  - The project includes a range of interactive visualizations, including:
  - Line charts showing the trend of return yards over time
  - Bar charts showing touchdowns by team and overall touchdowns by the NFL
  - Interactive online bar charts showing amount of Returns, Touchdowns, and Yards gained

# Technical Details
  - Backend: Built using NFL_Scaper, with API routes serving back Python-created plots.
  - Frontend: Built using HTML, Python, and JavaScript, with user-driven interaction enabled through dropdowns and menus.
  - Dependencies: Python 3.0 or better, with an environment containing Pandas, seaborn, matplot.lib, pathlib, glob, os and datetime dependencies.

# DATA SOURCES: 
  - NFLDatascraper used to scrape NFL website
  - credit to Marc Linder for creating the NFLDatascraper https://github.com/MarcLinderGit/NFL_Stats


# ANALYSIS:

# what is the variations of kick returns yards from 1970 thru 2022?
  -Signifigant changes during the 1982, 1994, and 2012 seasons
  -in 1982 there was a players strike leading to only 25 of the 32 teams playing  their seasons
  - in 94-95 there was a huge increase in kick return yards
  - after 2011 the kick return yardage decreases significantly over the next several years
  

# What are the rules changes that affected special teams during kickoffs?
  - in 1974 they moved the kickoffs from the 40 yard line to the 35 yard line
  - in 94 they moved the kickoff line to the 30 yard line
  - in 2011 they moved the ball back to the 35 yard line and moved the players 5 yards away from the line to prevent a running start

# Look for shifting trends in 1974 and 2011 to see if major rule changes affected kick returns
  - the most significant change was after 2011 when they reimplemented the ball being kicked from the 35
  - kickers are becoming more athletic and there are a lot more touchbacks now compared to 1974 when that rule was first implemented

# Ethical consiederations
  - is the nfl website an approved website to scrape?

the nfl website is okay to scrape as long as data is used for personal or research purposes. It cannot be used commercially.
