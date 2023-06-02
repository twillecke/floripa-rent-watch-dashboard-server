import ResidentialProperty from "../entity/ResidentialProperty";

export default interface ResidentialPropertyRepository {
    findAll (): Promise<ResidentialProperty[]>,
    findAllByJodId (job_id: number): Promise<ResidentialProperty[]>
}