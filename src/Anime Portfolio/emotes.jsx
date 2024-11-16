import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css";

import anime12 from '../assets/images/emoties/anime12.jpg'
import anime13 from '../assets/images/emoties/anime13.jpg'
import anime14 from '../assets/images/emoties/anime14.jpg'

const itemData = [
  {
    img: anime12,
    title: 'portrait',
    rows: 2,
    cols: 3,
  },
  {
    img: anime13,
    title: 'portrait',
    rows: 2,
    cols: 2,
  },
  {
    img: anime14,
    title: 'portrait',
    rows: 4,
    cols: 3
  },
];

function Emotes() {
  return (
    <div className='gallery'>
      <ImageList 
        sx={{ 
            width: '100%', 
            height: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '10px', 
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
                height: '100%',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Emotes;
