import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Unit } from "./Unit";

@Entity('products')
class Product extends BaseEntity {

  @PrimaryGeneratedColumn() id: number;
  
  @Column('text') name: string;
  @Column('decimal') quantity: number;

  @ManyToOne( tye => Unit, { 
    onDelete: "SET NULL", 
    onUpdate: "CASCADE" 
  })
  unit: Unit;

  @ManyToOne( tye => Category, { 
    onDelete: "SET NULL", 
    onUpdate: "CASCADE" 
  })
  category: Category;

  @Column('text') description: string;
  @Column('datetime') created_at: Date;
  @Column('datetime') updated_at: Date;
}


export { Product };