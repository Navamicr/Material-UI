import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3" component='h1' gutterBottom>h3 heading</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
         <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, vero.</Typography>{/*like paragraph */}
        <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, doloribus.</Typography>
    </div>
  )
}
