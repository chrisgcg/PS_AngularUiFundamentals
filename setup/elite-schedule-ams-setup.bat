REM First set up the tables
REM azure mobile table list elite-schedule-demo-cp

call azure mobile table create elite-schedule-demo-cp leagues

call azure mobile table create elite-schedule-demo-cp locations

call azure mobile table create elite-schedule-demo-cp teams

call azure mobile table create elite-schedule-demo-cp games


REM Now populate tables with data

node elite-schedule-ams-seed-data.js
