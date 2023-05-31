# API Endpoints:

[V] /api/residential-properties  =>  fetch all residential properties as ResidentialProperty entities
[V] /api/residential-properties/job-id/<job_id>  =>  fetch residential properties from single as ResidentialProperty entities
[V] /api/residential-properties/overview  =>  fetch general data of all jobs as JobOverview entities
[V] /api/residential-properties/overview/job-id/<job_id>  =>  fetch general data of single job as JobOverview entities

[X] /api/residential-properties/compare-overview/<first_job_id>-<second-job-id>

# Server Commands

npx nodemon src/main.ts  =>  runs server in http://localhost:3000/
npx jest  =>  runs all tests

# Database and server connection settings

Check configuration settings at ./src/config.ts