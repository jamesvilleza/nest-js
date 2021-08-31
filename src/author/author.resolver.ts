import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { PostService } from "src/post/post.service";
import { AssignPostsToAuthorInput } from "./assign-posts-to-authors.input";
import { Author } from "./author.entity";
import { AuthorService } from "./author.service";
import { AuthorType } from "./author.type";
import { createAuthorInput } from "./create-author.input";

@Resolver(of => AuthorType)
export class AuthorResolver {
    constructor (
        private authorService: AuthorService,
        private postService: PostService,
    ) {}

    @Query(returns => [AuthorType])
    async authors() {
        return this.authorService.getAuthors()
    }

    @Query(returns => AuthorType)
    async author(
        @Args('id') id: string,
    ) {
        return this.authorService.getAuthor(id);
    }


    @Mutation(returns => AuthorType)
    createAuthor(
        @Args('createAuthorInput') createAuthorInput: createAuthorInput
    ) {
        return this.authorService.createAuthor(createAuthorInput);
    }

    @Mutation(returns => AuthorType)
    assignPostsToAuthors(
        @Args('assignPostsToAuthorInput') assignPostsToAuthorInput: AssignPostsToAuthorInput,
    ) {
        const { authorId, postIds } = assignPostsToAuthorInput;
        return this.authorService.assignPostsToAuthors(authorId, postIds);
    }

    @ResolveField()
    async posts(@Parent() author: Author) {
        return this.postService.getManyPosts(author.posts);
    }
}