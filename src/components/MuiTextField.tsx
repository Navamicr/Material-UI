import { Stack,TextField,InputAdornment } from "@mui/material"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
export const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='name' variant="outlined"/>
            <TextField label='name' variant="filled"/>
            <TextField label='name' variant="standard"/>
        </Stack>
        <Stack direction='row' spacing={2}>
        <TextField label='small secondary' size="small" color="secondary" variant="standard"/>
        </Stack>

        <Stack direction='row' spacing={2}>
        <TextField label='Form Input' required value={value} onChange={e=>setValue(e.target.value)} error={!value} helperText={!value?'Required':'Do not share'}/>
        <TextField label='password' type="password" helperText='Do not share password' disabled InputProps={{
            endAdornment:<InputAdornment position="end"><VisibilityOffIcon/></InputAdornment>
        }}/>
        <TextField label='Read only' InputProps={{readOnly:true}}/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='amount' InputProps={{
                startAdornment:<InputAdornment position="start">$</InputAdornment>
            }}/>
            <TextField label='weight' InputProps={{
                endAdornment:<InputAdornment position="end">kg</InputAdornment>
            }}/>
            
        </Stack>
    </Stack>
  )
}
