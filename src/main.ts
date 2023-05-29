import express from "express";
import config from "./config";
import ResidentialPropertiesService from "./service/ResidentialPropertyService";

const app = express();
app.get("/api/residential-properties", async function (req, res){
    const residentialPropertiesService = new ResidentialPropertiesService();
    const residential_properties = await residentialPropertiesService.getResidentialProperties();
    res.json(residential_properties)
})
app.listen(config.server.port);

