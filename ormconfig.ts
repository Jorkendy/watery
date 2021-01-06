export = {
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB_NAME,
    entities: ["src/entity/*.ts"],
    migrations: ["src/database/migration/*.ts"],
    cli: {
        "migrationsDir": "src/database/migration"
    },
    synchronize: true
}