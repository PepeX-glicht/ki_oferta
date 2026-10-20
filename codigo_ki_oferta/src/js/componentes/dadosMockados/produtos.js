const produtos = [
    {
        id: 1,
        nome: "Café Três Corações",
        preco: 10.99,
        img:"https://mercafefaststore.vtexassets.com/arquivos/ids/554533/Filtrado-3-Coracoes-500g.png?v=638639910837800000",
        categoria: "bebidas"
    },
    {
        id: 2,
        nome: "Café Pilão",
        preco: 8.99,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqd7mbtHvz-sBD-gFZTCIz3c3zJJebgELo69TUYZksT249PfgDZow05nR&s=10",
        categoria: "bebidas"
    },
    {
        id: 3,
        nome: "Café Mellita",
        preco: 12.99,
        img:"https://lojamelitta.vteximg.com.br/arquivos/ids/162371-1000-1000/11005901_FRENTE.png.png?v=639227519398100000",
        categoria: "bebidas"
    },
    {
        id: 4,
        nome: "Café União",
        preco: 15.99,
        img:"https://camaquadistribuidora.agilecdn.com.br/121531_1.jpg?v=491-2332321735",
        categoria: "bebidas"
    },
    {
        id: 5,
        nome: "Desinfetante Pinho Sol",
        preco: 6.55,
        img:"https://coopsp.vtexassets.com/arquivos/ids/214635-1200-auto?v=637919522836430000&width=1200&height=auto&aspect=true",
        categoria: "limpeza"
    },
    {
        id: 6,
        nome: "Sabonete Protex Ômega",
        preco: 21.90,
        img:"https://deskontao.agilecdn.com.br/23082_1.jpg?v=17-3413855894",
        categoria: "limpeza"
    },
    {
        id: 7,
        nome: "Lava Roupas em Pó Brilhante",
        preco: 9.49,
        img:"https://giassi.vtexassets.com/arquivos/ids/2756791/Lava-Roupas-Po-Roupas-Brancas-e-Coloridas-Brilhante-Limpeza-Total-Caixa-800g.jpg?v=638627541745770000",
        categoria: "limpeza"
    },
    {
        id: 8,
        nome: "Amaciante Downy",
        preco: 40.98,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcFowmYEc_MNJddAaWbskpEze-e6u-pvq_h8VZ7hoPw&s=10",
        categoria: "limpeza"
    },
    {
        id: 9,
        nome: "Arroz Branco Biju",
        preco: 4.49,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVqWQC3bPHA0LOXCIGj4JJpPYp5idJE3MaHFo4iyeyg&s=10",
        categoria: "mercearia"
    },
    {
        id: 10,
        nome: "Feijão Carioca Kicaldo",
        preco: 7.90,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmumAkYQYRfCXjEmab0iRTEtYii6KFN72wrDvtQh0GQ&s=10",
        categoria: "mercearia"
    },
    {
        id: 11,
        nome: "Macarrão Espaguete MONDO",
        preco: 3.43,
        img:"https://mercantilnovaera.vtexassets.com/arquivos/ids/218485/Macarrao-Espaguete-MONDO-Pasta-Embalagem-400g.jpg?v=638605525349870000",
        categoria: "mercearia"
    },
    {
        id: 12,
        nome: "Farinha de Trigo Tradicional Dona Benta",
        preco: 6.98,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrynqi_fgBBzTeXRKlMYmVqJ48zt1K2OjGX5ef5P5Ig&s=10",
        categoria: "mercearia"
    },
    {
        id: 13,
        nome: "Fraldinha Bovina Montana Perdigão",
        preco: 44.90,
        img:"https://mambodelivery.vtexassets.com/arquivos/ids/231432/131460.jpg.jpg?v=638811841617200000",
        categoria: "carnes"
    },
    {
        id: 14,
        nome: "Cupim Maturatta",
        preco: 59.90,
        img:"https://aogosto.com.br/delivery/wp-content/uploads/2023/01/Design-sem-nome-2024-04-11T191409.386.jpg",
        categoria: "carnes"
    },
    {
        id: 15,
        nome: "Patinho Bovino Friboi Reserva",
        preco: 59.89,
        img:"https://assets.ibecom.com.br/ib.item.image.large/l-082627b3db57485082d7d560d38df4ab.jpeg",
        categoria: "carnes"
    },
    {
        id: 16,
        nome: "Linguiça de Churrasco 5kg",
        preco: 33.88,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybBxpRMXAKyp22DAobIirE1bnBfevx4AqAMHMgQgW2A&s=10",
        categoria: "carnes"
    },
    {
        id: 17,
        nome: "Mini Alface Lisa Hidrosol",
        preco: 2.30,
        img:"https://hortifrutibr.vtexassets.com/arquivos/ids/165038/Mini-Alface-Lisa-Hidrosol.jpg?v=639130823987770000",
        categoria: "hortifruti"
    },
    {
        id: 18,
        nome: "Alface Crespa Mais Verdes",
        preco: 2.50,
        img:"https://tauste.com.br/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/6/1673091777408158.jpg",
        categoria: "hortifruti"
    },
    {
        id: 19,
        nome: "Uva Verde sem Sementes MImo",
        preco: 7.89,
        img:"https://meufestval.vtexassets.com/arquivos/ids/305155/uva-verde-mimo-sem-sementes-500g.jpg?v=639216407821930000",
        categoria: "hortifruti"
    },
    {
        id: 20,
        nome: "Morango",
        preco: 12.73,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUI4DuawyNIyUCx5TQ9EPljSb_5rBaDi2eI6aBcOzUrw&s=10",
        categoria: "hortifruti"
    },
    {
        id: 21,
        nome: "Creme Dental Colgate",
        preco: 7.89,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU4lg4Wok2duMy2Xhxj0pXxM9bwhfeVdkcYDmTr0rhA&s=10",
        categoria: "higiene"
    },
    {
        id: 22,
        nome: "Sabonete Lux Botanicals Flor de Lótus",
        preco: 2.89,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPsUmI4Uf4xB9bVYw5BzsCvaIVaouIB8Q0KgqYYaoeA&s=10",
        categoria: "higiene"
    },
    {
        id: 23,
        nome: "Shampoo Liso Extremo Pantene",
        preco: 33.99,
        img:"https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F15925906.webp&w=3840&q=40",
        categoria: "higiene"
    },
    {
        id: 24,
        nome: "Hastes Flexiveis Cotonetes Johnson & Johnson",
        preco: 16.73,
        img:"https://product-data.raiadrogasil.io/images/3449406.webp",
        categoria: "higiene"
    },



]

export default produtos