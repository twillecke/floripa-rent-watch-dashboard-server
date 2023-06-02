import DataOverview from "../entity/DataOverview";

export default interface DataOverviewRepository {
    findAllByJobId (JobId: number): Promise<DataOverview[]>
}