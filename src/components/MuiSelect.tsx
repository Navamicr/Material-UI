import { Box ,TextField,MenuItem} from "@mui/material";
import { ChangeEvent, useState } from "react";



export const MuiSelect = () => {
    const [countries,setCountries]=useState<string[]>([])
    console.log({countries})
    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value;
        setCountries(typeof value==='string'?value.split(','):value)
    }
  return (
    <Box width='250px'>
        <TextField label='select country' select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple:true}}>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Austria</MenuItem>
        </TextField>
    </Box>
  )
}
