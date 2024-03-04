import { Box,Button,Card,CardActions,CardContent, CardMedia, Typography } from "@mui/material"


export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img' height='140'image="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>React</Typography>
                <Typography variant="body2" color='text.secodary'>React is a js library for building user iterfaces.React can  be used as a base in the development of spa.</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
