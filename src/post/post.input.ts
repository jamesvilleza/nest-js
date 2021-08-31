import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, MinLength } from "class-validator";

@InputType()
export class CreatePostInput {
    @MinLength(1)
    @Field()
    title: string;

    @MinLength(1)
    @Field()
    content: string;

    @IsDateString()
    @Field()
    postDate: string;
}