import { Alert, AlertTitle, Button, Stack } from "@mui/material"


export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
         <Alert  severity="error">this is an error Alert</Alert>
         <Alert  severity="warning">this is a warning Alert</Alert>
         <Alert  severity="info">this is an info Alert</Alert>
         <Alert  severity="success">this is a success Alert</Alert>

         <Alert variant="outlined" severity="error">this is an error Alert</Alert>
         <Alert variant="outlined" severity="warning">this is a warning Alert</Alert>
         <Alert variant="outlined" severity="info">this is an info Alert</Alert>
         <Alert variant="outlined" severity="success">this is a success Alert</Alert>

         <Alert variant="filled" severity="error" onClose={()=>alert('Close alert')}><AlertTitle>Error</AlertTitle>this is an error Alert</Alert>
         <Alert variant="filled" severity="warning"><AlertTitle>Warning</AlertTitle>this is a warning Alert</Alert>
         <Alert variant="filled" severity="info"><AlertTitle>Info</AlertTitle>this is an info Alert</Alert>
         <Alert variant="filled" severity="success" action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
         }
         >
          <AlertTitle>Success</AlertTitle>this is a success Alert</Alert>
    </Stack>
  )
}

