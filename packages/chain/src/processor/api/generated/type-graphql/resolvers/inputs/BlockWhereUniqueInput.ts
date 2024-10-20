import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../../../../../node_modules/@prisma/client-processor";
import { DecimalJSScalar } from "../../scalars";
import { BlockWhereInput } from "../inputs/BlockWhereInput";

@TypeGraphQL.InputType("BlockWhereUniqueInput", {})
export class BlockWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => [BlockWhereInput], {
    nullable: true
  })
  AND?: BlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockWhereInput], {
    nullable: true
  })
  OR?: BlockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockWhereInput], {
    nullable: true
  })
  NOT?: BlockWhereInput[] | undefined;
}