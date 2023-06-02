import config from "../../config";
import Connection from "./Connection";
import pgp from "pg-promise"

export default class PgPromiseConnection implements Connection {
    connection: any;

    constructor () {
        this.connection = pgp()(config.database);
    }
    
    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }
    close(): Promise<void> {
        return this.connection.$pool.end();
    }
    
}