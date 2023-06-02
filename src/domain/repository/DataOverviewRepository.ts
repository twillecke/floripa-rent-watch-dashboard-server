import DataOverview from "../entity/DataOverview";

export default interface DataOverviewRepository {
    findAll (): Promise<DataOverview[]>,
    findAllByJobId (JobId: number): Promise<DataOverview>
}