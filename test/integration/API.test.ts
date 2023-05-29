import axios from "axios";
import ResidentialProperty from "../../src/entity/ResidentialProperty";

test("Return residential-properties data in API", async function () {
  const response = await axios({
    url: "http://localhost:3000/residential-properties",
    method: "get",
  });
  const residential_properties_data = response.data;
  expect(residential_properties_data.length).toBeGreaterThan(0);

  for (const property_data of residential_properties_data) {
    const residential_property = new ResidentialProperty(
      property_data.address,
      property_data.region,
      property_data.city,
      property_data.state,
      property_data.housing_type,
      property_data.rent_type,
      property_data.price,
      property_data.date_of_scrap,
      property_data.cond_price,
      property_data.iptu_price,
      property_data.size_in_m2,
      property_data.bedroom_count,
      property_data.parking_count,
      property_data.bathroom_count
    );

    // Assert that the converted residential_property object has the expected properties
    expect(residential_property.address).toEqual(property_data.address);
    expect(residential_property.region).toEqual(property_data.region);
    expect(residential_property.city).toEqual(property_data.city);
    expect(residential_property.state).toEqual(property_data.state);
    expect(residential_property.housing_type).toEqual(property_data.housing_type);
    expect(residential_property.rent_type).toEqual(property_data.rent_type);
    expect(residential_property.price).toEqual(property_data.price);
    expect(residential_property.date_of_scrap).toEqual(property_data.date_of_scrap);
    expect(residential_property.cond_price).toEqual(property_data.cond_price);
    expect(residential_property.iptu_price).toEqual(property_data.iptu_price);
    expect(residential_property.size_in_m2).toEqual(property_data.size_in_m2);
    expect(residential_property.bedroom_count).toEqual(property_data.bedroom_count);
    expect(residential_property.parking_count).toEqual(property_data.parking_count);
    expect(residential_property.bathroom_count).toEqual(property_data.bathroom_count);
  }
});

