import express from "express";
import config from "./config";
import ResidentialPropertiesService from "./service/ResidentialPropertyService";

const app = express();
app.get("/api/residential-properties", async function (req, res){
    const residentialPropertiesService = new ResidentialPropertiesService();
    const residential_properties = await residentialPropertiesService.getResidentialProperties();
    res.json(residential_properties)
})
app.get("/api/residential-properties/job-id/:job_id", async function (req, res) {
    const job_id = req.params.job_id;
    const residentialPropertiesService = new ResidentialPropertiesService();
    const residentialProperties = await residentialPropertiesService.getResidentialPropertiesByJobId(job_id);
    res.json(residentialProperties);
});
app.listen(config.server.port);

