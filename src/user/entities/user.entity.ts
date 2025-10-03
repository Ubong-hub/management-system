import { Column, Entity, OneToMany } from 'typeorm';
import { Role } from '../../enum/role.enum';
import { Base } from './baseEntity';

@Entity()
export class User extends Base {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.user,
  })
  role: Role;
    todo: any;
  
}
