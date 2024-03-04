import { Badge, Stack } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color="error">
            <MailIcon/>
        </Badge>

        <Badge badgeContent={100} color="error" max={999}>
            <MailIcon/>
        </Badge>

        <Badge variant="dot" color="primary" invisible={true}>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}
