import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('units')
class Unit extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 2 })
  code: string;
}

export { Unit };