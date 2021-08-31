import { Field, ObjectType } from "@nestjs/graphql";
import { PostType } from "src/post/post.type";

@ObjectType('Author')
export class AuthorType {
    @Field()
    id: string;

    @Field()
    username: string;

    @Field(type => [PostType])
    posts: string[];
}