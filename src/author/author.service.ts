import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { createAuthorInput } from './create-author.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author) private authorRepository: Repository<Author>,
    ) {}

    createAuthor(createAuthorInput: createAuthorInput): Promise<Author> {
        const { username, posts } = createAuthorInput;
        const author = this.authorRepository.create({
            id: uuid(),
            username,
            posts
        });
        return this.authorRepository.save(author);
    }

    async getAuthors(): Promise<Author[]> {
        return this.authorRepository.find();
    }
    
    async getAuthor(id: string): Promise<Author> {
        return this.authorRepository.findOne({ id });
    }
    
    async assignPostsToAuthors(authorId: string, postIds: string[]): Promise<Author> {
        const author = await this.authorRepository.findOne({ id: authorId})
        author.posts = [...author.posts,...postIds];
        return this.authorRepository.save(author);
    }

}
