import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { currentUser, login } = useAuth();
  const navigate = useNavigate();
  if(currentUser) return navigate("/");

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Ingresá
          </Typography>

          <Formik
            initialValues={{
              email: "",
              pass: "",
            }}
            validate={(values) => {
              const errors = {};
              const regexpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              if (!values.email) {
                errors.email = "Campo requerido";
              } else if (!regexpEmail.test(values.email)) {
                errors.email = "Email invalido";
              }

              if (!values.pass) {
                errors.pass = "Campo requerido";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              login(values)

              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  error={errors.email && touched.email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="pass"
                  label="Password"
                  type="password"
                  id="pass"
                  error={errors.pass && touched.pass}
                  value={values.pass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.pass && touched.pass && errors.pass}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Ingresá
                </Button>
                <Grid container>
                  <Grid item>
                    <Link to="/signup" variant="body2">
                      {"¿No tienes una cuenta? Registrate"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
