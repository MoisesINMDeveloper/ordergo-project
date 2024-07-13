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
export interface PayDates {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}
const data: { categories: Category[]; paydates: PayDates } = {
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
            "/Perros/2PerrosAsquerocitos.jfif",
            "/Perros/2PerrosCalientes.jfif",
            "/Perros/PerroCaliente.jfif",
          ],
          description:
            "Clasico perro caliente disponible con: ensalada rayada, papas cabello de angel, salchicha alemana, salsas al gusto.",
        },
        {
          id: 2,
          title: "Perros Americanos",
          price: 1.49,
          images: ["/Perros/combodog.jpg"],
          description:
            "Perros americanos tradicionales salchica americana salsa blanca y salsa roja.",
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
          images: [
            "/burger/RompeDietaBurger.jfif",
            "/burger/RompeDietaBurger.jfif",
          ],
          description:
            "Hamburguesa clasica frescos ingredientes como: lechuga, tomate, cebolla, papas fritas, carne, salsas al gusto.",
        },
        {
          id: 2,
          title: "Burguer Comb",
          price: 4.99,
          images: ["/burger/BurgerComb.jpg"],
          description:
            "Doble hamburguesa con racion de papas cuenta con Lechuga tomate cebolla pepinillos y carne de res.",
        },
        {
          id: 3,
          title: "Burger Papas",
          price: 1.99,
          images: ["/burger/burgerpapas.jpg"],
          description:
            "Extraña combinacion entre el morbido queso fundido y la carne acompañada de deliciosas papas fritas perfecta para cualquier antojo.",
        },
        {
          id: 4,
          title: "Burger Express",
          price: 3.99,
          images: ["/burger/rompehuesos.jpg"],
          description:
            "Hamburguesa express cuenta con doble carne racion de papas tomate lechuga aros de cebolla y todo el contorno extra en queso y salsas",
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
          images: [
            "/pepito/PepitoFullEquipo.jfif",
            "/pepito/PepitoPeligro.jfif",
          ],
          description:
            "Un tradicional pepito callejero de carne con: tomate, lechuga, papas cabello de angel, queso amarillo, cebolla, jamon, salsas al gusto.",
        },
      ],
    },
    {
      id: 4,
      name: "salchipapas",
      products: [
        {
          id: 1,
          title: "Salchipapas",
          price: 4.99,
          images: [
            "/salchipapa/salchipapas.jpg",
            "/salchipapa/salchipapas2.jpg",
          ],
          description:
            "Combo de salchicas picadas papas fritas combinadas con salsas al gusto, queso amarillo, jamon y tocineta.",
        },
      ],
    },
    {
      id: 5,
      name: "combos",
      products: [
        {
          id: 1,
          title: "Combo 2 personas",
          price: 4.99,
          images: ["/combos/combofamiliar.jpg"],
          description:
            "Combo para dos personas dos perros calientes, 2 racion de pollo y papas fritas mas 2 jugos naturales.",
        },
        {
          id: 2,
          title: "Papas fritas",
          price: 2.99,
          images: ["/combos/papasfritas.jpg"],
          description:
            "Racion extensa de papas fritas con salsa tartara para abrir el apetito.",
        },
      ],
    },
    {
      id: 6,
      name: "Bebidas",
      products: [
        {
          id: 1,
          title: "Coca Cola 1Lts",
          price: 0.99,
          images: [
            "/bebidas/CocaCola.jfif",
            "/bebidas/Coca-Cola2.jfif",
            "/bebidas/Coca-Cola3.jfif",
          ],
          description:
            "Bebida Coca-Cola de 1Lt perfecta para acompañar tus pedidos en pareja.",
        },
        {
          id: 2,
          title: "Vaso Coca Cola",
          price: 0.5,
          images: ["/bebidas/basoCoca.jpg", "/bebidas/Coca-Cola2.jfif"],
          description:
            "Bebida Coca-Cola  perfecta para acompañar tus pedidos individuales.",
        },
        {
          id: 3,
          title: "Batido de cambur",
          price: 0.99,
          images: ["/bebidas/batidocambur.jpg"],
          description: "Delicioso batido de cambur muy nutritivo y natural.",
        },
        {
          id: 4,
          title: "Batido de naranja",
          price: 0.99,
          images: ["/bebidas/batidosabroso.jpg"],
          description:
            "Jugo de naranja para los amantes del citrico, altos valores de vitamina C.",
        },
      ],
    },
  ],
  paydates: {
    bank: "Venezuela",
    code: "0102",
    cedula: "24685881",
    phone: "04124676968",
  },
};

export default data;
