import React, { useState } from "react";
import "./faqPage.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import accordianPlus from "../../Assets/images/accordianPlus.svg";
import accordianMinus from "../../Assets/images/accordianMinus.svg";

export default function FaqPage() {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faqPage">
      <Box className="accordian-container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={
              expanded === "panel1" ? (
                <img src={accordianMinus} alt="minus" />
              ) : (
                <img src={accordianPlus} alt="plus" />
              )
            }
          >
            <Typography className="accordian-header">Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            expandIcon={
              expanded === "panel2" ? (
                <img src={accordianMinus} alt="minus" />
              ) : (
                <img src={accordianPlus} alt="plus" />
              )
            }
          >
            <Typography className="accordian-header">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            expandIcon={
              expanded === "panel3" ? (
                <img src={accordianMinus} alt="minus" />
              ) : (
                <img src={accordianPlus} alt="plus" />
              )
            }
          >
            <Typography className="accordian-header">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            expandIcon={
              expanded === "panel4" ? (
                <img src={accordianMinus} alt="minus" />
              ) : (
                <img src={accordianPlus} alt="plus" />
              )
            }
          >
            <Typography className="accordian-header">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
