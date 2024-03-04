import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"


export const MuiSkeleton = () => {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])
  return (
    // <Stack spacing={1} width='250px'>
    //     <Skeleton variant="text" animation='wave'/>
    //     <Skeleton variant="circular" width={40} height={40} animation='wave'/>
    //     <Skeleton variant="rectangular"  width={250} height={125} animation='wave'/>
    // </Stack>

    <Box sx={{width:'250px'}}>
        {
            loading?(
                <Skeleton variant="rectangular" width={256} height={144} animation='wave'/>
            ):(
                <img src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D/"width={256} height={144}/>
            )
        }
        <Stack direction='row' spacing={1} sx={{width:'100%',marginTop:'12px'}}>
            {
                loading?(
                    <Skeleton variant="circular" width={40} height={40} animation='wave'/>
                ):(
                    <Avatar>V</Avatar>
                )
            }

            <Stack sx={{width:"80%"}}>
                {
                    loading?(
                        <>
                        <Typography variant="body1">
                            <Skeleton variant="text" width='100%' animation='wave'/>
                        </Typography>
                        <Typography variant="body2">
                            <Skeleton variant="text" width='100%' animation='wave'/>
                        </Typography>
                        </>
                    ):(
                        <>
                        <Typography variant="body1">
                            React MUI Tutorial
                        </Typography>
                        </>
                    )
                }
            </Stack>
        </Stack>
    </Box>
  )
}
