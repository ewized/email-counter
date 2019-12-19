# Email Counter

Simple webservice to count unique emails.
Send a post request to `/` with the body payload of a Json array of emails to count.

## Running

Install the needed node modules

> npm install

Will build and start a server at `localhost:3000`.

> npm run start

## Files
- **index.js** The simple web service
- **emails.js** The implementtaing for counting emails and serilazing them
- **emails.test.js** The unit test to make sure it works
