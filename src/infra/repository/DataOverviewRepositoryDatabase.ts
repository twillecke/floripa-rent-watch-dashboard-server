import DataOverview from "../../domain/entity/DataOverview";
import DataOverviewRepository from "../../domain/repository/DataOverviewRepository";
import Connection from "../database/Connection";

export default class DataOverviewRepositoryDatabase implements DataOverviewRepository{

    constructor (readonly connection: Connection) { 
    }

    async findAll(): Promise<DataOverview[]> {
        const residential_properties_data = await this.connection.query(`
        SELECT
            job_id,
            total_count,
            total_avg AS average_price,
            total_avg_monthly_count,
            total_avg_monthly,
            total_avg_daily_count,
            total_avg_daily,
            apartamento_monthly_count,
            apartamento_monthly_avg,
            apartamento_daily_count,
            apartamento_daily_avg,
            casa_monthly_count,
            casa_monthly_avg,
            casa_daily_count,
            casa_daily_avg,
            chacara_monthly_count,
            chacara_monthly_avg,
            chacara_daily_count,
            chacara_daily_avg,
            cobertura_monthly_count,
            cobertura_monthly_avg,
            cobertura_daily_count,
            cobertura_daily_avg,
            condominio_monthl_count,
            condominio_monthly_avg,
            condominio_daily_count,
            condominio_daily_avg,
            flat_monthly_count,
            flat_daily_count,
            flat_daily_avg,
            loft_monthly_count,
            loft_monthly_avg,
            loft_daily_count,
            loft_daily_avg,
            quitinete_monthly_count,
            quitinete_monthly_avg,
            quitinete_daily_count,
            quitinete_daily_avg,
            sobrado_monthly_count,
            sobrado_monthly_avg,
            sobrado_daily_count,
            sobrado_daily_avg,
            studio_monthly_count,
            studio_monthly_avg,
            studio_daily_count,
            studio_daily_avg,
            vila_monthly_count,
            vila_monthly_avg,
            vila_daily_count,
            vila_daily_avg
        FROM public.overview
        GROUP BY job_id;

    
        `, []);
    
        const data_overview_array: DataOverview[] = [];
    
        for (const data_row of residential_properties_data) {
    const data_overview = new DataOverview(
        data_row.job_id,
        data_row.total_count,
        data_row.average_price,
        data_row.total_avg_monthly_count,
        data_row.total_avg_monthly,
        data_row.total_avg_daily_count,
        data_row.total_avg_daily,
        data_row.apartamento_monthly_count,
        data_row.apartamento_monthly_avg,
        data_row.apartamento_daily_count,
        data_row.apartamento_daily_avg,
        data_row.casa_monthly_count,
        data_row.casa_monthly_avg,
        data_row.casa_daily_count,
        data_row.casa_daily_avg,
        data_row.chacara_monthly_count,
        data_row.chacara_monthly_avg,
        data_row.chacara_daily_count,
        data_row.chacara_daily_avg,
        data_row.cobertura_monthly_count,
        data_row.cobertura_monthly_avg,
        data_row.cobertura_daily_count,
        data_row.cobertura_daily_avg,
        data_row.condominio_monthl_count,
        data_row.condominio_monthly_avg,
        data_row.condominio_daily_count,
        data_row.condominio_daily_avg,
        data_row.flat_monthly_count,
        data_row.flat_daily_count,
        data_row.flat_daily_avg,
        data_row.loft_monthly_count,
        data_row.loft_monthly_avg,
        data_row.loft_daily_count,
        data_row.loft_daily_avg,
        data_row.quitinete_monthly_count,
        data_row.quitinete_monthly_avg,
        data_row.quitinete_daily_count,
        data_row.quitinete_daily_avg,
        data_row.sobrado_monthly_count,
        data_row.sobrado_monthly_avg,
        data_row.sobrado_daily_count,
        data_row.sobrado_daily_avg,
        data_row.studio_monthly_count,
        data_row.studio_monthly_avg,
        data_row.studio_daily_count,
        data_row.studio_daily_avg,
        data_row.vila_monthly_count,
        data_row.vila_monthly_avg,
        data_row.vila_daily_count,
        data_row.vila_daily_avg
    );
          data_overview_array.push(data_overview)
        }
        return data_overview_array;    
    }
    async findAllByJobId(job_id: number): Promise<DataOverview> {
        const query = `
            SELECT
                job_id,
                total_count,
                total_avg AS average_price,
                total_avg_monthly_count,
                total_avg_monthly,
                total_avg_daily_count,
                total_avg_daily,
                apartamento_monthly_count,
                apartamento_monthly_avg,
                apartamento_daily_count,
                apartamento_daily_avg,
                casa_monthly_count,
                casa_monthly_avg,
                casa_daily_count,
                casa_daily_avg,
                chacara_monthly_count,
                chacara_monthly_avg,
                chacara_daily_count,
                chacara_daily_avg,
                cobertura_monthly_count,
                cobertura_monthly_avg,
                cobertura_daily_count,
                cobertura_daily_avg,
                condominio_monthl_count,
                condominio_monthly_avg,
                condominio_daily_count,
                condominio_daily_avg,
                flat_monthly_count,
                flat_daily_count,
                flat_daily_avg,
                loft_monthly_count,
                loft_monthly_avg,
                loft_daily_count,
                loft_daily_avg,
                quitinete_monthly_count,
                quitinete_monthly_avg,
                quitinete_daily_count,
                quitinete_daily_avg,
                sobrado_monthly_count,
                sobrado_monthly_avg,
                sobrado_daily_count,
                sobrado_daily_avg,
                studio_monthly_count,
                studio_monthly_avg,
                studio_daily_count,
                studio_daily_avg,
                vila_monthly_count,
                vila_monthly_avg,
                vila_daily_count,
                vila_daily_avg
            FROM public.overview
            WHERE 
                job_id = $1
            GROUP BY
                job_id
        `;
        
        const result = await this.connection.query(query, [job_id]);
       
        const data_row = result[0];
    
        const data_overview = new DataOverview(
            data_row.job_id,
            data_row.total_count,
            data_row.average_price,
            data_row.total_avg_monthly_count,
            data_row.total_avg_monthly,
            data_row.total_avg_daily_count,
            data_row.total_avg_daily,
            data_row.apartamento_monthly_count,
            data_row.apartamento_monthly_avg,
            data_row.apartamento_daily_count,
            data_row.apartamento_daily_avg,
            data_row.casa_monthly_count,
            data_row.casa_monthly_avg,
            data_row.casa_daily_count,
            data_row.casa_daily_avg,
            data_row.chacara_monthly_count,
            data_row.chacara_monthly_avg,
            data_row.chacara_daily_count,
            data_row.chacara_daily_avg,
            data_row.cobertura_monthly_count,
            data_row.cobertura_monthly_avg,
            data_row.cobertura_daily_count,
            data_row.cobertura_daily_avg,
            data_row.condominio_monthl_count,
            data_row.condominio_monthly_avg,
            data_row.condominio_daily_count,
            data_row.condominio_daily_avg,
            data_row.flat_monthly_count,
            data_row.flat_daily_count,
            data_row.flat_daily_avg,
            data_row.loft_monthly_count,
            data_row.loft_monthly_avg,
            data_row.loft_daily_count,
            data_row.loft_daily_avg,
            data_row.quitinete_monthly_count,
            data_row.quitinete_monthly_avg,
            data_row.quitinete_daily_count,
            data_row.quitinete_daily_avg,
            data_row.sobrado_monthly_count,
            data_row.sobrado_monthly_avg,
            data_row.sobrado_daily_count,
            data_row.sobrado_daily_avg,
            data_row.studio_monthly_count,
            data_row.studio_monthly_avg,
            data_row.studio_daily_count,
            data_row.studio_daily_avg,
            data_row.vila_monthly_count,
            data_row.vila_monthly_avg,
            data_row.vila_daily_count,
            data_row.vila_daily_avg
        );
    
        return data_overview;
    }
        
}