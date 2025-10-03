import { Base } from "src/user/entities/baseEntity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Todolist extends Base {
    @Column()
    title: string;
    @Column()
    description: string;
    
    @Column()
    UserId: string;

    @ManyToOne(()=> User, (user)=> user.todo)
    user: User[]
}