import React, { useState } from "react";
import "./faqPage.scss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@material-ui/core";
import accordianPlus from "../../Assets/images/accordianPlus.svg";
import accordianMinus from "../../Assets/images/accordianMinus.svg";

const FaqPage = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  expanded === "panel1" ? (
    <img src={accordianMinus} alt="plus" />
  ) : (
    <img src={accordianPlus} alt="minus" />
  );

  return (
    <div id="faqPage">
      <Box className="accordian-container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel1" ? (
                <img src={accordianMinus} alt="plus" />
              ) : (
                <img src={accordianPlus} alt="minus" />
              )
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="accordian-header">Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Animi quod dignissimos atque quae qui laboriosam quasi. Quos omnis
              Chair Lorem ipsum
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel2" ? (
                <img src={accordianMinus} alt="plus" />
              ) : (
                <img src={accordianPlus} alt="minus" />
              )
            }
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography className="accordian-header">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel3" ? (
                <img src={accordianMinus} alt="plus" />
              ) : (
                <img src={accordianPlus} alt="minus" />
              )
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography className="accordian-header">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
             
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordian-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel4" ? (
                <img src={accordianMinus} alt="plus" />
              ) : (
                <img src={accordianPlus} alt="minus" />
              )
            }
            aria-controls="panel4d-content"
            id="panel4d-header"
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
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={
              expanded === "panel5" ? (
                <img src={accordianMinus} alt="plus" />
              ) : (
                <img src={accordianPlus} alt="minus" />
              )
            }
            aria-controls="panel5d-content"
            id="panel5d-header"
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
      </Box>
    </div>
  );
};

export default FaqPage;
