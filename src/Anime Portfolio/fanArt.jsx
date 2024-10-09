import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css"

import anime18 from '../assets/images/fanArt/anime18.jpg'
import anime19 from '../assets/images/fanArt/anime19.jpg'
import anime20 from '../assets/images/fanArt/anime20.jpg'
import anime21 from '../assets/images/fanArt/anime21.jpg'
import anime22 from '../assets/images/fanArt/anime22.jpg'
import anime23 from '../assets/images/fanArt/anime23.jpg'

const itemData = [
  {
    img: anime18,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: anime19,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: anime20,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: anime21,
    title: 'portrait',
    rows: 3,
    cols: 2
  },
  {
    img: anime22,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: anime23,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
];

function Conceptual() {
  return (
    <div className='gallery container'>
      <ImageList 
        sx={{ 
            width: '100%', 
            height: 'auto',
            display: 'flex',
            alignItems: "center",
            justiy: "center",
            flexWrap: 'wrap',
            gap: '8px', 
        }} 
        variant="quilted" 
        cols={itemData.length} 
        rowHeight={121}
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
                height: '100%' ,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Conceptual;
