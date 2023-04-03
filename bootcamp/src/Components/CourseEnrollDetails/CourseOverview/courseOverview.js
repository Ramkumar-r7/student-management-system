import { Box, Paper, Typography, Stack, Chip } from "@mui/material";
import React from "react";
import "./courseOverview.scss";
const CourseOverview = () => {
  return (
    <div id="courseOverview">
      <Box className="about-box">
        <Paper className="about-paper">
          <p className="about-header">About this course</p>
          <p className="about-content">
            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce
            vieux whisky au juge blond qui fume sur son île intérieure, à côté
            de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui
            lui permet de penser à la cænogenèse de l"être dont il est question
            dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui,
            pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau
            juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse
            jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu.
            Vieux pelage que je modifie
          </p>
          <Stack direction="row" className="infoheader-stack">
            <Typography variant="span" className="date-author-head">
              Expected Time
            </Typography>
            <Typography variant="span" className="date-author-head">
              Created By
            </Typography>
            <Typography variant="span" className="date-author-head">
              Created On
            </Typography>
          </Stack>
          <Stack direction="row" className="info-stack">
            <Typography variant="span" className="period-text">
              12 days
            </Typography>
            <Typography variant="span" className="author-text">
              Dev Kanda
            </Typography>
            <Typography variant="span" className="date-text">
              20 Feb 2023
            </Typography>
          </Stack>
          <p className="skill-head">Skills</p>
          <Chip label="Java" className="chip" />
        </Paper>
        <Paper>
          <p className="about-header">Description</p>
          <p className="about-content">
            Software engineer will be responsible for writing and installing web
            application code in order to fix errors and add need enhancements.
            They will also help support the services on which the applications
            run. This includes patching and updating OS software, installing new
            components,and helping to resolve incidents and/or outages. The
            software engineer will also assist the team in managing code
            libraries and code deployment systems.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          </p>
          <p className="requirement-header">Requirement</p>
          <ul className="about-content">
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </li>
            <li>
              Lorem ipsum dolor s sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              t labore et dolore magna aliquyam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              t labore et dolore magna aliquyam
            </li>
            <li>
              Lorem ipsum dolor sit amet, cy eirmod tempor invidunt ut labore et
              t labore et dolore magna aliquyam
            </li>
          </ul>
          <p className="learn-header">At end what tou will learn</p>
          <ul className="about-content">
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </li>
            <li>
              Lorem ipsum dolor s sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              t labore et dolore magna aliquyam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              t labore et dolore magna aliquyam
            </li>
            <li>
              Lorem ipsum dolor sit amet, cy eirmod tempor invidunt ut labore et
              t labore et dolore magna aliquyam
            </li>
          </ul>
        </Paper>
        <Paper className="about-paper">
          <p className="about-header">Instructor</p>
          <p className="author-name">Dev Kanda</p>
          <p className="about-content">
            Eveniet rerum velit deserunt quo necessitatibus ab sint qui id.
            Excepturi eos vero commodi nulla repellat vel et pariatur. Ut harum
            incidunt omnis deleniti sit et quis. Perferendis et eaque doloribus
            reprehenderit repellendus ipsa. Natus quia distinctio sit delectus.
            <br />
            <br />
            Non aperiam doloremque ipsum placeat voluptates similique ea. Porro
            rerum veritatis totam adipisci sunt deserunt suscipit velit aliquid.
            Nisi quo ducimus. Et consequuntur quia quia reprehenderit itaque
            voluptate rerum est reiciendis. Reiciendis earum dolor molestias.
            Cumque qui beatae. Excepturi veritatis occaecati dolores. 
         
          </p>
        </Paper>
      </Box>
    </div>
  );
};

export default CourseOverview;
