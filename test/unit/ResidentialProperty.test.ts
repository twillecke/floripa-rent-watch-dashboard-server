import ResidentialProperty from "../../src/entity/ResidentialProperty";


test("Create residential property entity", function(){
    const residentialProperty = new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "casa", "D", 2700, "2023-05-08");
    expect(residentialProperty.city).toBe("Florianópolis");
    expect(residentialProperty.price).toBe(2700);
})

test("Do not create residential property entity without required data: address, region, city, state, housing_type, rent_type, price, date_of_scrap", function(){
    expect(() => new ResidentialProperty("", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "casa", "D", 2700, "2023-05-08")).toThrow(new Error("Address is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "", "Florianópolis", "SC", "casa", "D", 2700, "2023-05-08")).toThrow(new Error("Region is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "", "SC", "casa", "D", 2700, "2023-05-08")).toThrow(new Error("City is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "", "casa", "D", 2700, "2023-05-08")).toThrow(new Error("State is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "", "D", 2700, "2023-05-08")).toThrow(new Error("Housing type is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "casa", "", 2700, "2023-05-08")).toThrow(new Error("Rent type is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "casa", "D", null, "2023-05-08")).toThrow(new Error("Price is required"));
    expect(() => new ResidentialProperty("Rua Dante de Patta", "Ingleses do Rio Vermelho", "Florianópolis", "SC", "casa", "D", 2700, "")).toThrow(new Error("Date of scrap is required"));
})

