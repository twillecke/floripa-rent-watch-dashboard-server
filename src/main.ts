import express from "express";
import config from "./config";
import ResidentialPropertiesService from "./service/ResidentialPropertyService";
import DataOverviewService from "./service/DataOverviewService";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ResidentialPropertyRepositoryDatabase from "./infra/repository/ResidentialPropertyRepositoryDatabase";
import DataOverviewRepositoryDatabase from "./infra/repository/DataOverviewRepositoryDatabase";
const app = express();

const connection = new PgPromiseConnection;
const residentialPropertyRepository = new ResidentialPropertyRepositoryDatabase(connection)
const dataOverviewRepository = new DataOverviewRepositoryDatabase(connection);

app.get("/api/residential-properties", async function (req, res){
    const residentialPropertiesService = new ResidentialPropertiesService(residentialPropertyRepository);
    const residential_properties = await residentialPropertiesService.getResidentialProperties();
    res.json(residential_properties)
})
app.get("/api/residential-properties/job-id/:job_id", async function (req, res) {
    const job_id = req.params.job_id;
    const residentialPropertiesService = new ResidentialPropertiesService(residentialPropertyRepository);
    const residentialProperties = await residentialPropertiesService.getResidentialPropertiesByJobId(parseInt(job_id));
    res.json(residentialProperties);
});
app.get("/api/residential-properties/overview", async function (req, res){
    const dataOverviewService = new DataOverviewService(dataOverviewRepository);
    const data_overview = await dataOverviewService.getDataOverview();
    res.json(data_overview)
})
app.get("/api/residential-properties/overview/job-id/:job_id", async function (req, res){
    const job_id = req.params.job_id;
    const dataOverviewService = new DataOverviewService(dataOverviewRepository);
    const data_overview = await dataOverviewService.getDataOverviewByJobId(parseInt(job_id));
    res.json(data_overview)
})
app.listen(config.server.port);

