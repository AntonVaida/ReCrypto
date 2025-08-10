import { Column, Entity } from 'typeorm';
import BaseEntity from 'src/shared/base.entity';

@Entity()
class User extends BaseEntity {
  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public password?: string;
}

export default User;
