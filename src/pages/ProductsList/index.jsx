import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getProducts } from "../../services/products.service";
import { Loading } from "../../components/Loading";
import { Alert, Typography } from "@mui/material";
import styles from "./index.module.css";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nombre",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripcion",
    width: 150,
    editable: true,
  }
  
];

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({
    message: "",
    type: "",
    isOpen: false,
  });

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = getProducts();
    fetchProducts
      .then((productsResponse) => {
        setProducts(productsResponse.products);
      })
      .catch((error) => {
        console.error(error);

        setAlert({
          message: "Ocurrió un error al obtener la información",
          type: "danger",
          show: true,
        });
      })
      .finally(setIsLoading(false));
  }, []);

  if(isLoading) return <Loading />;

  return (
    <section>
        { alert.isOpen && ( <Alert alert={alert} setAlert={setAlert}/> ) }
        <Typography paddingLeft={10} variant="h4">Lista de productos</Typography>

        <Box className={styles.tableContainer}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </section>
  );
};
