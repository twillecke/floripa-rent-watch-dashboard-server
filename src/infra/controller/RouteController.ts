import ResidentialPropertiesService from "../../service/ResidentialPropertyService";
import Http from "../http/Http";
import ResidentialPropertyRepositoryDatabase from "../repository/ResidentialPropertyRepositoryDatabase";
import Connection from "../database/Connection";
import DataOverviewRepositoryDatabase from "../repository/DataOverviewRepositoryDatabase";
import DataOverviewService from "../../service/DataOverviewService";

export default class RouteController {
	constructor(readonly http: Http, readonly connection: Connection) {
		http.route(
			"get",
			"/api/residential-properties",
			async function (params: any, body: any) {
				const residentialPropertyRepository =
					new ResidentialPropertyRepositoryDatabase(connection);
				const residentialPropertiesService =
					new ResidentialPropertiesService(
						residentialPropertyRepository
					);
				const residential_properties =
					await residentialPropertiesService.getResidentialProperties();
				return residential_properties;
			}
		);

		http.route(
			"get",
			"/api/residential-properties/job-id/:job_id",
			async function (params: any, body: any) {
				try {
					const residentialPropertyRepository =
						new ResidentialPropertyRepositoryDatabase(connection);
					const residentialPropertiesService =
						new ResidentialPropertiesService(
							residentialPropertyRepository
						);
					const residentialProperties =
						await residentialPropertiesService.getResidentialPropertiesByJobId(
							parseInt(params.job_id)
						);

					if (
						!residentialProperties ||
						residentialProperties.length === 0
					) {
						return {
							status: 404,
							error: `Residential properties not found for job id: ${params.job_id}`,
						};
					}

					return residentialProperties;
				} catch (error) {
					// Handle the error
					console.error("Error occurred:", error);

					// Return an appropriate error response
					return { status: 500, error: "Internal server error" };
				}
			}
		);

		http.route(
			"get",
			"/api/residential-properties/overview",
			async function (params: any, body: any) {
				const dataOverviewRepository =
					new DataOverviewRepositoryDatabase(connection);
				const dataOverviewService = new DataOverviewService(
					dataOverviewRepository
				);
				const data_overview =
					await dataOverviewService.getDataOverview();
				return data_overview;
			}
		);

		http.route(
			"get",
			"/api/residential-properties/overview/week/:week",
			async function (params: any, body: any) {
				try {
					const dataOverviewRepository =
						new DataOverviewRepositoryDatabase(connection);
					const dataOverviewService = new DataOverviewService(
						dataOverviewRepository
					);
					const data_overview =
						await dataOverviewService.getDataOverviewByJobId(
							parseInt(params.week)
						);

					return data_overview;
				} catch (error) {
					// Handle the error
					console.error("Error occurred:", error);
					// Return an appropriate error response
					return {
						status: 404,
						error: `Overview data not found for week: ${params.week}`,
					};
				}
			}
		);
	}
}
