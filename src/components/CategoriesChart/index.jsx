import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoriesChart = ({ countByCategory }) => {
  const [categories, setCategories] = useState(null);
  const [counts, setCounts] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (countByCategory !== undefined) {
      setCategories(Object.keys(countByCategory));
      setCounts(Object.values(countByCategory));
    }
  }, [countByCategory]);

  useEffect(() => {
    setData({
      labels: categories,
      datasets: [
        {
          label: "Cantidad de productos",
          data: counts,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [categories, counts]);

  if(!categories || !counts ) return <h1> Cargando... </h1>

  return (
    <div className="col-lg-6 mb-4" id="categories">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos por categoria
          </h5>
        </div>
        <div className="card-body">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};
