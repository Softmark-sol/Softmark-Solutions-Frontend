import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Portraits from '../Anime Portfolio/portraits';
import Conceptual from '../Anime Portfolio/conceptual';
import Emotes from '../Anime Portfolio/emotes';
import CharacterSheet from '../Anime Portfolio/chararcterSheet';
import FanArt from '../Anime Portfolio/fanArt';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function AnimePortfolio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="portfolio-container">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          width: "100%",
          alignItems: 'center', // Center the Tabs container horizontally
        }}
      >
        <Box
          sx={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            borderBottom: 1,
            borderColor: 'divider',
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            width: '100%', // Ensure the Tabs container takes full width
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Tabs example"
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center tabs within the container
              minWidth: 'fit-content',
              width: 'auto', // Make Tabs container only as wide as needed
            }}
          >
            <Tab label="PORTRAITS" />
            <Tab label="CONCEPTUAL ANIME CHARACTERS" />
            <Tab label="EMOTES" />
            <Tab label="CHARACTER SHEET" />
            <Tab label="FAN ART" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Portraits />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Conceptual />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Emotes />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CharacterSheet />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FanArt />
        </TabPanel>
      </Box>
    </div>
  );
}
