import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell align="center">Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row=>(
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData=[{
    "id": 1,
    "first_name": "Hogan",
    "last_name": "Middler",
    "email": "hmiddler0@cdc.gov",
    "gender": "Male",
    "ip_address": "225.145.19.115"
  }, {
    "id": 2,
    "first_name": "Bradly",
    "last_name": "Wofenden",
    "email": "bwofenden1@mit.edu",
    "gender": "Male",
    "ip_address": "113.149.82.160"
  }, {
    "id": 3,
    "first_name": "Ki",
    "last_name": "Brind",
    "email": "kbrind2@people.com.cn",
    "gender": "Female",
    "ip_address": "194.211.167.82"
  }, {
    "id": 4,
    "first_name": "Robenia",
    "last_name": "Christal",
    "email": "rchristal3@miibeian.gov.cn",
    "gender": "Female",
    "ip_address": "37.21.133.196"
  }, {
    "id": 5,
    "first_name": "Krissie",
    "last_name": "Vinnick",
    "email": "kvinnick4@ovh.net",
    "gender": "Non-binary",
    "ip_address": "65.80.184.51"
  }, {
    "id": 6,
    "first_name": "Leanna",
    "last_name": "Jepperson",
    "email": "ljepperson5@blogspot.com",
    "gender": "Female",
    "ip_address": "38.162.242.141"
  }, {
    "id": 7,
    "first_name": "Bobette",
    "last_name": "Hallowell",
    "email": "bhallowell6@yahoo.com",
    "gender": "Female",
    "ip_address": "157.79.227.143"
  }, {
    "id": 8,
    "first_name": "Berty",
    "last_name": "Tibalt",
    "email": "btibalt7@theguardian.com",
    "gender": "Female",
    "ip_address": "60.116.224.204"
  }, {
    "id": 9,
    "first_name": "Tate",
    "last_name": "Fruen",
    "email": "tfruen8@goodreads.com",
    "gender": "Female",
    "ip_address": "252.160.71.134"
  }, {
    "id": 10,
    "first_name": "Doralin",
    "last_name": "Marquess",
    "email": "dmarquess9@bloglovin.com",
    "gender": "Bigender",
    "ip_address": "16.35.92.199"
  }]