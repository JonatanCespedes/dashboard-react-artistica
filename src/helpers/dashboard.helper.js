export const generateCards = (products, users) => {
  return [
    {
      id: 1,
      quantity: products.count,
      color: "primary",
      title: "Total de productos",
      icon: "fa-box",
    },
    {
      id: 2,
      quantity: users.count,
      color: "secondary",
      title: "Total de usuarios",
      icon: "fa-users",
    },
    {
      id: 3,
      quantity: Object.keys(products.countByCategory).length,
      color: "danger",
      title: "Total de categorias",
      icon: "fa-layer-group",
    },
  ];
};
