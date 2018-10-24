import { App } from "@aws-cdk/cdk";
import { KanjosenStack } from "./stack";

const app = new App();

new KanjosenStack(app, "kanjosen");

app.run();
