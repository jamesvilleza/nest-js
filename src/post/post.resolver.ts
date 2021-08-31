import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CreatePostInput } from "./post.input";
import { PostService } from "./post.service";
import { PostType } from "./post.type";

@Resolver(of => PostType)
export class PostResolver {
    constructor(
        private postService: PostService
    ) {}
    
    @Query(returns => [PostType])
    posts() {
        return this.postService.getPosts();
    }

    @Query(returns => PostType)
    post(
        @Args('id') id: string,
    ) {
        return this.postService.getPost(id);
    }

    @Mutation(returns => PostType)
    createPost(
        @Args('createPostInput') createPostInput: CreatePostInput,
    ) {
        return this.postService.createPost(createPostInput);
    }
}