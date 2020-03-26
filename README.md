# Prominent Edge Homework

## Running Locally
Inside the Root Directory, run `npm run dev`.

Application runs on port 3000.

## Endpoints
The application has 1 endpoint with 2 query parameters.

1 query parameter is required and 1 is optional.

/start-date/:startDate/end-date/:endDate?fileLocation=directory/to/save/to/within/app&byIncident

### startDate & endDate formats
Dates should be in floating timestamp format, with or without a time.

2020-03-22 and 2020-03-22T00:00:00.000 work.

### fileLocation
File location will be relative to $appRoot/files/$fileLocation.

?fileLocation=test/file/uploads

Will create the following directories if they don't exist in $appRoot/files
- test
- test/file
- test/file/uploads

### byIncident
Simply adding the query parameter ?byIncident will tell the application the user wants the files grouped and saved by incident number.