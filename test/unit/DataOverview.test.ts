import DataOverview from "../../src/entity/DataOverview";


test("Create residential property entity", function(){
    const dataOverview = new DataOverview("1", 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100);
    expect(dataOverview.job_id).toBe("1");
    expect(dataOverview.average_price).toBe(100);
})