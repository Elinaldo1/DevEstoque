import * as entities from "@entities/index";
import * as SQLite from "expo-sqlite/legacy";
import { DataSource } from "typeorm";

const datasource = new DataSource({
    database: "devestoque.db",
    entities: entities,
    // location: ".",
    logging: ['query', 'migration'],
    synchronize: true,
    type: "expo",
    driver: SQLite
});

export { datasource };
