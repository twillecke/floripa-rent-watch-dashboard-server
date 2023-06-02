import express from "express";
import config from "./config";
import ResidentialPropertiesService from "./service/ResidentialPropertyService";
import DataOverviewService from "./service/DataOverviewService";

const app = express();
app.get("/api/residential-properties", async function (req, res){
    const residentialPropertiesService = new ResidentialPropertiesService();
    const residential_properties = await residentialPropertiesService.getResidentialProperties();
    res.json(residential_properties)
})
app.get("/api/residential-properties/job-id/:job_id", async function (req, res) {
    const job_id = req.params.job_id;
    const residentialPropertiesService = new ResidentialPropertiesService();
    const residentialProperties = await residentialPropertiesService.getResidentialPropertiesByJobId(parseInt(job_id));
    res.json(residentialProperties);
});
app.get("/api/residential-properties/overview", async function (req, res){
    const dataOverviewService = new DataOverviewService();
    const data_overview = await dataOverviewService.getDataOverview();
    res.json(data_overview)
})
app.get("/api/residential-properties/overview/job-id/:job_id", async function (req, res){
    const job_id = req.params.job_id;
    const dataOverviewService = new DataOverviewService();
    const data_overview = await dataOverviewService.getDataOverviewByJobId(parseInt(job_id));
    res.json(data_overview)
})
app.listen(config.server.port);

