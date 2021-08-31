import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/post.entity';
import { PostModule } from './post/post.module';
import { AuthorModule } from './author/author.module';
import { Author } from './author/author.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/blog',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Post,
        Author
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    PostModule,
    AuthorModule
  ],

})
export class AppModule {}
