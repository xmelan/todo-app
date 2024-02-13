import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Usuario"
              type="text"
              placeholder="Usuario"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com.do"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12} sm={12}>
            <Button variant="contained" fullWidth sx={{ borderRadius: 16 }}>
              Register
            </Button>
          </Grid>

          <Grid
            container
            sx={{ mt: 2, gap: 2 }}
            direction="row"
            justifyContent="center"
          >
            <Typography>Already have an account?</Typography>
            <Typography sx={{ fontWeight: "medium" }}>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Log In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
