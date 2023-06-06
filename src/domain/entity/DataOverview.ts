export default class DataOverview {
    constructor(
        readonly job_id: number | string,
        readonly total_count: number | string,
        readonly total_avg: number | string,
        readonly total_avg_monthly_count: number | string,
        readonly total_avg_monthly: number | string,
        readonly total_avg_daily_count: number | string,
        readonly total_avg_daily: number | string,
        readonly apartamento_monthly_count: number | string,
        readonly apartamento_monthly_avg: number | string,
        readonly apartamento_daily_count: number | string,
        readonly apartamento_daily_avg: number | string,
        readonly casa_monthly_count: number | string,
        readonly casa_monthly_avg: number | string,
        readonly casa_daily_count: number | string,
        readonly casa_daily_avg: number | string,
        readonly chacara_monthly_count: number | string,
        readonly chacara_monthly_avg: number | string,
        readonly chacara_daily_count: number | string,
        readonly chacara_daily_avg: number | string,
        readonly cobertura_monthly_count: number | string,
        readonly cobertura_monthly_avg: number | string,
        readonly cobertura_daily_count: number | string,
        readonly cobertura_daily_avg: number | string,
        readonly condominio_monthl_count: number | string,
        readonly condominio_monthly_avg: number | string,
        readonly condominio_daily_count: number | string,
        readonly condominio_daily_avg: number | string,
        readonly flat_monthly_count: number | string,
        readonly flat_daily_count: number | string,
        readonly flat_daily_avg: number | string,
        readonly loft_monthly_count: number | string,
        readonly loft_monthly_avg: number | string,
        readonly loft_daily_count: number | string,
        readonly loft_daily_avg: number | string,
        readonly quitinete_monthly_count: number | string,
        readonly quitinete_monthly_avg: number | string,
        readonly quitinete_daily_count: number | string,
        readonly quitinete_daily_avg: number | string,
        readonly sobrado_monthly_count: number | string,
        readonly sobrado_monthly_avg: number | string,
        readonly sobrado_daily_count: number | string,
        readonly sobrado_daily_avg: number | string,
        readonly studio_monthly_count: number | string,
        readonly studio_monthly_avg: number | string,
        readonly studio_daily_count: number | string,
        readonly studio_daily_avg: number | string,
        readonly vila_monthly_count: number | string,
        readonly vila_monthly_avg: number | string,
        readonly vila_daily_count: number | string,
        readonly vila_daily_avg: number | string,
    ) {
        if (job_id === null) throw new Error("Job ID is required");
        if (total_count === null) throw new Error("Total count is required");
        if (total_avg === null) throw new Error("Total average is required");
        if (total_avg_monthly_count === null) throw new Error("Total average monthly count is required");
        if (total_avg_monthly === null) throw new Error("Total average monthly is required");
        if (total_avg_daily_count === null) throw new Error("Total average daily count is required");
        if (total_avg_daily === null) throw new Error("Total average daily is required");
    }
}
