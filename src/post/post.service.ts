import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { v4 as uuid } from 'uuid';
import { CreatePostInput } from './post.input';
import { Author } from 'src/author/author.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
    ) {}
    
    async getPost(id: string): Promise<Post> {
        return this.postRepository.findOne({ id });
    };
    
    async getPosts(): Promise<Post[]> {
        return this.postRepository.find();
    }
    

    async createPost(createPostinput: CreatePostInput): Promise<Post> {
        const { title, content, postDate } = createPostinput;
        const post = this.postRepository.create({
            id: uuid(),
            title,
            content,
            postDate,
        });

        return this.postRepository.save(post);
    }

    async getManyPosts(postIds: string[]): Promise<Post[]> {
        return this.postRepository.find({
            where: {
                id: {
                    $in: postIds,
                }
            }
        })
    }
}
