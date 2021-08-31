import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Post {
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    postDate: string;

}