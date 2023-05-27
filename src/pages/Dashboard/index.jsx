import { Card } from "../../components/Card";
import { LastDataContainer } from "../../components/LastDataContainer";
import { useState, useEffect } from "react";
import { getProducts } from "../../services/products.service";
import { Loading } from "../../components/Loading";
import { getUsers } from "../../services/users.service";
import { generateCards } from "../../helpers/dashboard.helper";

export const Dashboard = () => {
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsData, setCardsData] = useState([]);

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
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!products || !users) return;

    const cards = generateCards(products, users);
    
    setCardsData(cards);
}, [products, users]);

  if (isLoading) return <Loading />;

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Artística Dalí Dashboard</h1>
      </div>

      <div className="row">
        {cardsData.map(({ id, color, title, quantity, icon }) => (
          <Card key={id} color={color} title={title} quantity={quantity} icon={icon} />
        ))}
      </div>

      <div className="row">
        <LastDataContainer />
        <LastDataContainer />
      </div>
    </div>
  );
};
