import { Stack,ImageList,ImageListItem, Box, ImageListItemBar } from "@mui/material"

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
        <ImageList sx={{width:500,height:450}} cols={3} rowHeight={164}>
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                ))
            }
        </ImageList>
        
        
        <ImageList variant="woven" sx={{width:500,height:450}} cols={3} gap={8}>
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))
            }
        </ImageList>
        
        <Box sx={{width:500,height:450,overflowY:'scroll'}} >
        <ImageList variant='masonry' cols={3} rowHeight={164}>
            {
                itemData.map(item=>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                    </ImageListItem>
                ))
            }
        </ImageList>
        </Box>
    </Stack>

  )}
  const itemData=[
    {
        img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        title:'Breakfast'
    },
    {
        img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        title:"Burger"
    },
    {
        img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
        title:"Camera"
    },
    {
        img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
        title:"Coffee"
    },
    {
        img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        title:'Breakfast'
    },
    {
        img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        title:"Burger"
    },
    {
        img:"https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8fHww",
        title:"Camera"
    },
    {
        img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww",
        title:"Coffee"
    },
    {
        img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8fHww",
        title:'Breakfast'
    },

  ]
  

