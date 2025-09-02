import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { ProductService } from "./products.service";
import { ProductController } from "./products.controller";
import { CategoryModule } from "../categories/category.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        CategoryModule
        ],
    providers: [ProductService],
    controllers: [ProductController]
})
export class ProductModule{}