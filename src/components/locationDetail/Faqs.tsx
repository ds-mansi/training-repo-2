import * as React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
export default function Faq(props: any) {
  console.log(props.faq, "faq");
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {props?.faq &&
        props?.faq?.map((res: any, index: any) => {
          return (
            <>
              <div>
                <Accordion
                  open={open === index + 1}
                  style={{
                    width: "80%",
                    margin: "auto",
                    backgroundColor: "#f1d7b1",
                    padding: "20px",
                  }}
                >
                  <AccordionHeader onClick={() => handleOpen(index + 1)}>
                    <h4>{res.name}</h4>
                  </AccordionHeader>
                  <AccordionBody
                    style={{
                      backgroundColor: "#f7c173",
                      border: "1px solid black",
                    }}
                  >
                    {res?.answer}
                  </AccordionBody>
                  <hr />
                </Accordion>
              </div>
            </>
          );
        })}
    </>
  );
}
