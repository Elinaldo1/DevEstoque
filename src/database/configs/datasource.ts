import * as entities from "@entities/index";
import * as SQLite from "expo-sqlite";
import { DataSource } from "typeorm";

const datasource = new DataSource({
    database: "devestoque",
    entities: entities,
    // location: ".",
    logging: ['query', 'migration'],
    synchronize: true,
    type: "expo",
    driver: SQLite
});

export { datasource };
