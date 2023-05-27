import { Card } from "../../components/Card";
import { LastDataContainer } from "../../components/LastDataContainer";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";
import { Loading } from "../../components/Loading";
import { getUsers } from "../../services/users.service";
import { generateCards } from "../../helpers/dashboard.helper";
import { Alert } from "../../components/Alert";
import { ShowError } from "../../components/Error";
import { CategoriesChart } from "../../components/CategoriesChart";

export const Dashboard = () => {
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [lastProductCreated, setLastProductCreated] = useState();
  const [lastUserCreated, setLastUserCreated] = useState();

  /* Efecto que se dispara solo al renderizar por primera vez el componente, se encarga de hacer las llamadas a las APIs */
  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = getProducts();

    const fetchUsers = getUsers();

    Promise.all([fetchProducts, fetchUsers])
      .then(([productsResponse, usersResponse]) => {
        setProducts(productsResponse);
        setUsers(usersResponse);
      })
      .catch((error) => {
        console.error(error);

        setAlert({
          message: "Ocurrió un error al obtener la información",
          type: "danger",
          show: true,
        });

        setError(true);
      })
      .finally(setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!products || !users) return;
    const { products: productsList } = products;
    const { users: usersList } = users;
    const cards = generateCards(products, users);

    setLastProductCreated(productsList.pop());
    setLastUserCreated(usersList.pop());
    setCardsData(cards);
  }, [products, users]);

  if (isLoading) return <Loading />;

  return (
    <div className="container-fluid">

      {error && <ShowError />}
      
      {alert.show && <Alert alert={alert} setAlert={setAlert} />}

      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Artística Dalí Dashboard</h1>
      </div>

      <div className="row">
        {cardsData.map(({ id, color, title, quantity, icon, href }) => (
          <Card
            key={id}
            color={color}
            title={title}
            quantity={quantity}
            icon={icon}
            href={href}
          />
        ))}
      </div>

      <div className="row">
        <LastDataContainer type="product" data={lastProductCreated} />
        <LastDataContainer type="user" data={lastUserCreated} />
      </div>
      <div className="row">
            <CategoriesChart countByCategory={products?.countByCategory}/>
      </div>
    </div>
  );
};
