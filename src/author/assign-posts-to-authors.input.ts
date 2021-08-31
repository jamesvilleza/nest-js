import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignPostsToAuthorInput {
    @IsUUID()
    @Field(type => ID)
    authorId: string;

    @IsUUID("4",{ each: true })
    @Field(type => [ID])
    postIds: string[];
}