import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css";

import anime15 from '../assets/images/characterSheet/anime15.jpg'
import anime16 from '../assets/images/characterSheet/anime16.jpg'
import anime17 from '../assets/images/characterSheet/anime17.jpg'

const itemData = [
  {
    img: anime15,
    title: 'portrait',
    rows: 5,
    cols: 3,
  },
  {
    img: anime16,
    title: 'portrait',
    rows: 5,
    cols: 2,
  },
  {
    img: anime17,
    title: 'portrait',
    rows: 5,
    cols: 3
  },
];

function FanArt() {
  return (
    <div className='gallery'>
      <ImageList 
        sx={{ 
          width: '100%', 
          height: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '8px',
          alignItems: 'start', // Align items to the start
        }} 
        variant="quilted"
      >
        {itemData.map((item) => (
          <ImageListItem 
            key={item.img} 
            cols={item.cols || 1} 
            rows={item.rows || 1}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: 'auto' 
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default FanArt;
