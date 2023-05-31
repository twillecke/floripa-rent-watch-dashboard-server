![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![PostgresSQL Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TsNode Badge](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)
# Floripa Rent Watch - Dashboard Server
## Server Setup
1. Install required dependencies `yarn add`
2. Install and configure PostgreSQL 15.3 or higher
3. Create PostgreSQL database and populate it with ` /.mock_db.sql` data 
4. Provide database and server connection settings at ./src/config.ts
5. Run server at http://localhost:3000 (or whatever port in config.ts) `npx nodemon src/main.ts`\
6. Initialize yarn configuration file `yarn ts-jest config:init`                                            
7. Run tests `npx jest` 
## APIs

| Status         | API endpoint                                     | Description                                                             |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| :heavy_check_mark: | /api/residential-properties                | Fetch all residential properties as ResidentialProperty entities               |
| :heavy_check_mark: | /api/residential-properties/job-id/<job_id> | Fetch residential properties from single job as ResidentialProperty entities  |
| :heavy_check_mark: | /api/residential-properties/overview         | Fetch general data of all jobs as JobOverview entities                        |
| :heavy_check_mark: | /api/residential-properties/overview/job-id/<job_id> | Fetch general data of single job as JobOverview entities               |
| :construction_worker:   | /api/residential-properties/compare-overview/<first_job_id>-<second_job_id> | Compare overview of two jobs as JobOverview entities |
  
  
