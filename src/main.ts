import config from "./config";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import RouteController from "./infra/controller/RouteController";


const connection = new PgPromiseConnection;
const http = new ExpressAdapter;
new RouteController(http, connection);
http.listen(config.server.port);


