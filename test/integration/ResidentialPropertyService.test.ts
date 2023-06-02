import ResidentialPropertyService from "../../src/service/ResidentialPropertyService";

test("Must return array of residential properties", async function () {
    const residentialPropertyService = new ResidentialPropertyService();
    const residential_properties = await residentialPropertyService.getResidentialProperties();
    expect(residential_properties.length).toBeGreaterThan(0);
})