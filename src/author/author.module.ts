import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from 'src/post/post.module';
import { Author } from './author.entity';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    PostModule,
  ],
  providers: [AuthorService, AuthorResolver]
})
export class AuthorModule {}
