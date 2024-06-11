import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import '../css/navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const LeftDrawer = () => {
  const location = useLocation();

  const [state, setState] = useState({
    left: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Contact = () => {
    const isHomePage = location.pathname === "/";
    if (isHomePage) {
      const contactForm = document.getElementById("form");
      console.log(contactForm)

      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/contactUs");
    }
  };

  const handleNavigation = (text) => {
    switch (text) {
      case 'Home':
        navigate('/');
        break;
      case 'Services':
        navigate('/services');
        break;
      case 'About Us':
        navigate('/aboutUs');
        break;
        case 'Why Us':
        navigate('/whyUs');
        break;
        case 'Our Work':
        navigate('/Ourservices');
        break;
      case 'Careers':
        window.location.href = 'https://www.linkedin.com/company/softmark-solutions-llc';
        break;
      case 'Contact Us':
        Contact()
        break;
      default:
        break;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Services', 'About Us', 'Why Us','Our Work', 'Careers', 'Contact Us'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><GiHamburgerMenu /></Button>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
