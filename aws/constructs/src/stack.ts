import { App, Stack, StackProps } from "@aws-cdk/cdk";

export class KanjosenStack extends Stack {
  constructor(parent: App, id: string, props?: StackProps) {
    super(parent, id, props);
  }
}
