import { Accordion,AccordionSummary,AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

export const MuiAccordian = () => {
    const [expanded,setExpanded]=useState<string|false>(false)
    const handleChange=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false)
    }
  return (
    <div>
        <Accordion expanded={expanded==='panel1'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel1')}>
            <AccordionSummary id="panel1-header" aria-controls="panel1Content"expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum exercitationem, alias atque distinctio consequuntur saepe ab, adipisci voluptas nemo, dignissimos unde quis numquam sunt quos! Consequuntur exercitationem ea neque beatae.
                Incidunt dolorem quibusdam animi quia ipsum blanditiis facere enim molestias nam in? Numquam, veniam enim ab, esse sed quis non culpa, harum perspiciatis vero itaque corrupti aspernatur earum cumque asperiores?
                Eveniet totam soluta qui expedita debitis quibusdam exercitationem vitae cupiditate rerum asperiores necessitatibus cumque repudiandae fugit explicabo repellat similique, facere nobis! Exercitationem eius nulla veritatis et hic a rem. Debitis.
                Eligendi ut ratione doloremque architecto, neque quas alias officiis quae necessitatibus obcaecati voluptatum laborum hic numquam facilis repellendus similique deleniti est quaerat amet incidunt? Voluptates repellendus sint laudantium quas assumenda?
                Dolorem explicabo reprehenderit unde nisi eum nesciunt sit labore quam at fugiat beatae corporis eius non omnis cumque, mollitia aliquid nobis laborum necessitatibus odio dolores. Harum explicabo quibusdam nemo delectus?
                Dolore consectetur unde recusandae porro esse fugiat laboriosam vero sunt similique, quos exercitationem maxime veniam, iure voluptatibus, debitis eligendi nulla atque itaque labore cumque nisi facere? Velit culpa atque eveniet.
                Tempora, amet? Voluptate laudantium placeat rem tenetur consequatur eligendi tempora nam dignissimos vitae perferendis voluptatum nisi enim aspernatur vero, repudiandae itaque quos exercitationem iure ea quaerat provident eos eum. Illo?
                Recusandae nobis, quisquam magnam iusto voluptatem asperiores sint, est ipsa nam voluptates cum, quam porro quae. Quae possimus officiis maiores minus, adipisci cupiditate aspernatur modi minima incidunt quidem voluptatum voluptas?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel2'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel2')}>
            <AccordionSummary id="panel2-header" aria-controls="panel2Content"expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum exercitationem, alias atque distinctio consequuntur saepe ab, adipisci voluptas nemo, dignissimos unde quis numquam sunt quos! Consequuntur exercitationem ea neque beatae.
                Incidunt dolorem quibusdam animi quia ipsum blanditiis facere enim molestias nam in? Numquam, veniam enim ab, esse sed quis non culpa, harum perspiciatis vero itaque corrupti aspernatur earum cumque asperiores?
                Eveniet totam soluta qui expedita debitis quibusdam exercitationem vitae cupiditate rerum asperiores necessitatibus cumque repudiandae fugit explicabo repellat similique, facere nobis! Exercitationem eius nulla veritatis et hic a rem. Debitis.
                Eligendi ut ratione doloremque architecto, neque quas alias officiis quae necessitatibus obcaecati voluptatum laborum hic numquam facilis repellendus similique deleniti est quaerat amet incidunt? Voluptates repellendus sint laudantium quas assumenda?
                Dolorem explicabo reprehenderit unde nisi eum nesciunt sit labore quam at fugiat beatae corporis eius non omnis cumque, mollitia aliquid nobis laborum necessitatibus odio dolores. Harum explicabo quibusdam nemo delectus?
                Dolore consectetur unde recusandae porro esse fugiat laboriosam vero sunt similique, quos exercitationem maxime veniam, iure voluptatibus, debitis eligendi nulla atque itaque labore cumque nisi facere? Velit culpa atque eveniet.
                Tempora, amet? Voluptate laudantium placeat rem tenetur consequatur eligendi tempora nam dignissimos vitae perferendis voluptatum nisi enim aspernatur vero, repudiandae itaque quos exercitationem iure ea quaerat provident eos eum. Illo?
                Recusandae nobis, quisquam magnam iusto voluptatem asperiores sint, est ipsa nam voluptates cum, quam porro quae. Quae possimus officiis maiores minus, adipisci cupiditate aspernatur modi minima incidunt quidem voluptatum voluptas?</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded==='panel3'} onChange={(event,isExpanded)=>handleChange(isExpanded,'panel3')}>
            <AccordionSummary id="panel3-header" aria-controls="panel3Content"expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum exercitationem, alias atque distinctio consequuntur saepe ab, adipisci voluptas nemo, dignissimos unde quis numquam sunt quos! Consequuntur exercitationem ea neque beatae.
                Incidunt dolorem quibusdam animi quia ipsum blanditiis facere enim molestias nam in? Numquam, veniam enim ab, esse sed quis non culpa, harum perspiciatis vero itaque corrupti aspernatur earum cumque asperiores?
                Eveniet totam soluta qui expedita debitis quibusdam exercitationem vitae cupiditate rerum asperiores necessitatibus cumque repudiandae fugit explicabo repellat similique, facere nobis! Exercitationem eius nulla veritatis et hic a rem. Debitis.
                Eligendi ut ratione doloremque architecto, neque quas alias officiis quae necessitatibus obcaecati voluptatum laborum hic numquam facilis repellendus similique deleniti est quaerat amet incidunt? Voluptates repellendus sint laudantium quas assumenda?
                Dolorem explicabo reprehenderit unde nisi eum nesciunt sit labore quam at fugiat beatae corporis eius non omnis cumque, mollitia aliquid nobis laborum necessitatibus odio dolores. Harum explicabo quibusdam nemo delectus?
                Dolore consectetur unde recusandae porro esse fugiat laboriosam vero sunt similique, quos exercitationem maxime veniam, iure voluptatibus, debitis eligendi nulla atque itaque labore cumque nisi facere? Velit culpa atque eveniet.
                Tempora, amet? Voluptate laudantium placeat rem tenetur consequatur eligendi tempora nam dignissimos vitae perferendis voluptatum nisi enim aspernatur vero, repudiandae itaque quos exercitationem iure ea quaerat provident eos eum. Illo?
                Recusandae nobis, quisquam magnam iusto voluptatem asperiores sint, est ipsa nam voluptates cum, quam porro quae. Quae possimus officiis maiores minus, adipisci cupiditate aspernatur modi minima incidunt quidem voluptatum voluptas?</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
