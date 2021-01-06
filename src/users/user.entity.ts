import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(["email"])
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: "FREE" })
  paidType: string;

  @CreateDateColumn({
    default: `now()`,
    nullable: true,
  })
  createdAt: string;

  @UpdateDateColumn({
    default: `now()`,
    nullable: true,
  })
  updatedAt: string;
}
