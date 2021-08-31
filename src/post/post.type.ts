import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Post')
export class PostType {
    @Field(type => ID)
    id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    postDate: string;
    
}