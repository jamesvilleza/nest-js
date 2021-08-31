import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID, MinLength } from "class-validator";

@InputType()
export class createAuthorInput {
    @MinLength(4)
    @Field()
    username: string;

    @IsUUID("4", { each: true })
    @Field(()=> [ID], { defaultValue: [] })
    posts: string[];
} 