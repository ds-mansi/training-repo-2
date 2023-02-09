import * as React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
export default function Faq(props:any){
  console.log(props.faq,"faq")

return(
  <>
 
    {props.faq && props.faq.map((res:any)=>{
      return(
        <>
            
            <div>
      
      <Accordion style={{ width: "80%",margin:"auto",backgroundColor:"#f1d7b1"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1a-content" style={{borderBottom:"1px solid #6c4e25" }}>
            <h4>{res.name}</h4>
        
          <Typography style={{fontWeight: "10px" }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"#f7c173"}}>
          <Typography>{res.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </>
            )
        })}
       
        
       
      
  </>
)
}