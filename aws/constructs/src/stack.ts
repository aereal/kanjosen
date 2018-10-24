import {
  Code,
  Function as LambdaFunction,
  Runtime,
  Tracing,
} from "@aws-cdk/aws-lambda";
import { App, Stack, StackProps } from "@aws-cdk/cdk";

export class KanjosenStack extends Stack {
  private lambda: LambdaFunction;

  constructor(parent: App, id: string, props?: StackProps) {
    super(parent, id, props);
    this.lambda = new LambdaFunction(this, "KanjosenClickHandler", {
      code: Code.asset("./lambda/dist"),
      handler: "index.KanjosenClickHandler",
      runtime: Runtime.NodeJS810,
      tracing: Tracing.Active,
    });
  }
}
