import type { title } from "process";

// src/constant/data.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}

const data: { categories: Category[] } = {
  categories: [
    {
      id: 1,
      name: "Perros Calientes",
      products: [
        {
          id: 1,
          title: "Perro Normal",
          price: 0.99,
          images: [
            "/2PerrosAsquerocitos.jfif",
            "/2PerrosCalientes.jfif",
            "/PerroCaliente.jfif",
          ],
          description:
            "Clasico perro caliente disponible con: ensalada rayada, papas cabello de angel, salchicha alemana, salsas al gusto.",
        },
      ],
    },
    {
      id: 2,
      name: "Hamburguesas",
      products: [
        {
          id: 1,
          title: "Hamburguesa Normal",
          price: 1.99,
          images: ["/RompeDietaBurger.jfif", "/RompeDietaBurger.jfif"],
          description:
            "Hamburguesa clasica frescos ingredientes como: lechuga, tomate, cebolla, papas fritas, carne, salsas al gusto.",
        },
      ],
    },
    {
      id: 3,
      name: "Pepitos",
      products: [
        {
          id: 1,
          title: "Pepito Carne",
          price: 7.99,
          images: ["/PepitoFullEquipo.jfif", "PepitoPeligro.jfif"],
          description:
            "Un tradicional pepito callejero de carne con: tomate, lechuga, papas cabello de angel, queso amarillo, cebolla, jamon, salsas al gusto.",
        },
      ],
    },
    {
      id: 4,
      name: "Bebidas",
      products: [
        {
          id: 1,
          title: "Coca Cola 1Lts",
          price: 0.99,
          images: ["/CocaCola.jfif", "/Coca-Cola2.jfif", "/Coca-Cola3.jfif"],
          description:
            "Bebida Coca-Cola de 1Lt perfecta para acompañar tus pedidos individuales.",
        },
      ],
    },
    {
      id: 5,
      name: "combos",
      products: [],
    },
  ],
};

export default data;
