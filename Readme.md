![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

# APIs

| Status         | API endpoint                                     | Description                                                             |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| :heavy_check_mark: | /api/residential-properties                | Fetch all residential properties as ResidentialProperty entities               |
| :heavy_check_mark: | /api/residential-properties/job-id/<job_id> | Fetch residential properties from single job as ResidentialProperty entities  |
| :heavy_check_mark: | /api/residential-properties/overview         | Fetch general data of all jobs as JobOverview entities                        |
| :heavy_check_mark: | /api/residential-properties/overview/job-id/<job_id> | Fetch general data of single job as JobOverview entities               |
| :construction_worker:   | /api/residential-properties/compare-overview/<first_job_id>-<second_job_id> | Compare overview of two jobs as JobOverview entities |

# Server Commands

`npx nodemon src/main.ts` =>  runs server at http://localhost:3000/ \
`npx jest`  =>  runs tests 

# Database and server connection settings

Provide configuration settings at ./src/config.ts
  
  
