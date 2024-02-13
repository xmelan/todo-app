import { Grid, Typography } from "@mui/material";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        padding: 4,
      }}
    >
      <Grid
        item
        className="card"
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Grid container justifyContent="center" alignContent="center">
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 'medium'}}>
            {title}
          </Typography>
        </Grid>

        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
