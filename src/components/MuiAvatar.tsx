import { Avatar, AvatarGroup, Stack } from "@mui/material"


export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row'spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>

        </Stack>
        <Stack direction='row'spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
            <Avatar src='https://tse1.mm.bing.net/th?id=OIP.MfhAsfIJ80y5wDkgLoZqzQHaF7&pid=Api&P=0&h=180' alt="Jane Doe"/>
            <Avatar src='https://tse1.mm.bing.net/th?id=OIP.2biyaloQ6FYBxL40ytUDlgHaHb&pid=Api&P=0&h=180' alt="Jane Doe"/>
            </AvatarGroup>
        </Stack>

        <Stack direction='row'spacing={1}>
            <Avatar variant='square' sx={{bgcolor:'primary.light',width:48, height:48}}>BW</Avatar>
            <Avatar variant='rounded' sx={{bgcolor:'success.light',width:48, height:48}}>CK</Avatar>

        </Stack>
    </Stack>
  )
}
