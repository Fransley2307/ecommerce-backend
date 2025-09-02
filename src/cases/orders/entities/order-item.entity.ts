import { Customer } from "src/cases/customers/customer.entity";
import { Product } from "src/cases/products/products.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./order.entity";


@Entity('order-item')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToMany(()=> Order)
    order: Order;

    @ManyToMany(()=> Product, {eager: true, nullable: false})
    product: Customer;

    @Column({nullable: false})
    quantity: number;

    @Column('decimal', {nullable: false, precision: 10, scale: 2})
    value: number;
}