import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type CountryCardProps = {
  flag: string,
  name: string,
  population: number,
  region: string,
  capital: string[] | undefined
}

function CountryCard({ flag, name, population, region, capital }: CountryCardProps) {
  return (
    <Card>
      <CardMedia component="img" image={flag} alt={name} sx={{height: "20vh"}} loading="lazy" />
      <CardContent>
        <Typography variant="h6" noWrap title={name}>{name}</Typography>
        <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Population: </Typography><Typography variant="body2" display="inline">{population.toLocaleString()}</Typography><br />
        <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Region: </Typography><Typography variant="body2" display="inline">{region}</Typography><br />
        <Typography variant="body2" display="inline" sx={{ fontWeight: "bold" }}>Capital: </Typography><Typography variant="body2" display="inline">{capital?.join(", ")}</Typography><br />
      </CardContent>
    </Card>
  );
}

export default CountryCard;