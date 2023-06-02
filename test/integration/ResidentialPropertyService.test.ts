import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import ResidentialPropertyRepositoryDatabase from "../../src/infra/repository/ResidentialPropertyRepositoryDatabase";
import ResidentialPropertyService from "../../src/service/ResidentialPropertyService";

test("Must return array of residential properties", async function () {
    const connection = new PgPromiseConnection();
    const residentialPropertyRepository = new ResidentialPropertyRepositoryDatabase(connection)
    const residentialPropertyService = new ResidentialPropertyService(residentialPropertyRepository);
    const residential_properties = await residentialPropertyService.getResidentialProperties();
    expect(residential_properties.length).toBeGreaterThan(0);
})