import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css"

import anime5 from '../assets/images/conseptualAnime/anime5.jpg'
import anime6 from '../assets/images/conseptualAnime/anime6.jpg'
import anime7 from '../assets/images/conseptualAnime/anime7.jpg'
import anime8 from '../assets/images/conseptualAnime/anime8.jpg'
import anime9 from '../assets/images/conseptualAnime/anime9.jpg'
import anime10 from '../assets/images/conseptualAnime/anime10.jpg'
import anime11 from '../assets/images/conseptualAnime/anime11.jpg'


const itemData = [
  {
    img: anime5,
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: anime6,
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: anime7,
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: anime8,
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: anime9,
    title: 'portrait',
    rows: 3,
    cols: 2
  },
  
  {
    img: anime10,
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: anime11,
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
