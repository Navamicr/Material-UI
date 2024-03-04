import { DatePicker } from "@mui/lab"
import { Stack, TextField } from "@mui/material"
import { useState } from "react"


export const MuiPicker = () => {
    const [selectedDate,setSelectedDate]=useState<Date|null>(null)
    console.log(selectedDate)
  return (
    <Stack spacing={2} sx={{width:'250px'}}>
        <DatePicker label='Date'
        value={selectedDate}
        onChange={(newValue)=>{
            setSelectedDate(newValue)
        }}
        />
    </Stack>
  )
}
