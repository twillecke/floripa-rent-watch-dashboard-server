export default class ResidentialProperty{
    constructor (
        readonly address: string, 
        readonly region: string, 
        readonly city: string,
        readonly state: string,
        readonly housing_type: string,
        readonly rent_type: string,
        readonly price: number | null,
        readonly date_of_scrap: string,
        readonly cond_price?: number,
        readonly iptu_price?: number,
        readonly size_in_m2?: number,
        readonly bedroom_count?: number,
        readonly parking_count?: number,
        readonly bathroom_count?: number
        ){
            if (address === "") throw new Error("Address is required");
            if (region === "") throw new Error("Region is required");
            if (city === "") throw new Error("City is required");
            if (state === "") throw new Error("State is required");
            if (housing_type === "") throw new Error("Housing type is required");
            if (rent_type === "") throw new Error("Rent type is required");
            if (price === null) throw new Error("Price is required");
            if (date_of_scrap === "") throw new Error("Date of scrap is required");            
    }
}