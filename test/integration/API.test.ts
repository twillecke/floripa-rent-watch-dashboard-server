import axios from "axios";

test("Return residential-properties data through API", async function () {
  const response = await axios({
    url: "http://localhost:3000/residential-properties",
    method: "get",
  });

  const residential_properties_data = response.data;

  expect(residential_properties_data.length).toBeGreaterThan(0);
});
