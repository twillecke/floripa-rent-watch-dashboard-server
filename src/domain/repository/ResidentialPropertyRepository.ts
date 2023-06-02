import ResidentialProperty from "../entity/ResidentialProperty";

export default interface ResidentialPropertyRepository {
    findAll (): Promise<ResidentialProperty[]>
}