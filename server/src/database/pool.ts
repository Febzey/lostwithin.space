import mysql from "mysql2/promise";
import "dotenv/config"


class Database {
    private pool: mysql.Pool;
    constructor() {
        console.log("db loaded", process.env.db_host)

        this.pool = mysql.createPool({
            host: process.env.db_host,
            user: process.env.db_user,
            password: process.env.db_password,
            port: 3306,
            database: "rootcorp",
            connectionLimit: 10,
        });

        this.pool.on("connection", (connection) => {
            console.log("Connected to database");
        });
    }

    public async query<T extends mysql.QueryResult>(sql: string, values?: any[]): Promise<[T, any]> {
        return this.pool.query<T>(sql, values && values.length ? values : undefined);
    }

    async close(): Promise<void> {
        await this.pool.end();
    }
}

const db = new Database();
export default db