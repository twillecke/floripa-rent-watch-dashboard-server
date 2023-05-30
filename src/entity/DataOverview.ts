export default class DataOverview{
    constructor (
        readonly average_price: number | string,
        readonly average_price_by_rent_type_monthly: number | string,
        readonly average_price_by_rent_type_daily: number | string,
        readonly average_price_by_apartamento: number | string,
        readonly average_price_by_sobrado: number | string,
        readonly average_price_by_casa: number | string,
        readonly average_price_by_studio: number | string,
        readonly average_price_by_quitinete: number | string,
        readonly average_size_in_m2: number | string,
        readonly average_bedroom_count: number | string,
        readonly average_parking_count?: number | string,
        ){
            if (average_parking_count === null) throw new Error("Region is required");
            if (average_bedroom_count === null) throw new Error("City is required");
            if (average_size_in_m2 === null) throw new Error("State is required");
            if (average_price_by_apartamento === null) throw new Error("Housing type is required");
            if (average_price_by_sobrado === null) throw new Error("Housing type is required");
            if (average_price_by_casa === null) throw new Error("Housing type is required");
            if (average_price_by_studio === null) throw new Error("Housing type is required");
            if (average_price_by_quitinete === null) throw new Error("Housing type is required");
            if (average_price_by_rent_type_monthly === null) throw new Error("Rent type is required");
            if (average_price === null) throw new Error("Average price is required");
    }
}
