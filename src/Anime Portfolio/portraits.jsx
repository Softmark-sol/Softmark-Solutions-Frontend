import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css";

import anime1 from '../assets/images/portraites/anime1.jpg'
import anime2 from '../assets/images/portraites/anime2.jpg'
import anime3 from '../assets/images/portraites/anime3.jpg'
import anime4 from '../assets/images/portraites/anime4.jpg'

const itemData = [
  {
    img: anime1,
    title: 'portrait',
    rows: 1,
    cols: 1,
  },
  {
    img: anime2,
    title: 'portrait',
    rows: 1,
    cols: 1,
  },
  {
    img: anime3,
    title: 'portrait',
    rows: 1,
    cols: 1,
  },
  {
    img: anime4,
    title: 'portrait',
    rows: 1,
    cols: 1,
  },
];

function Portraits() {
  return (
    <div className='gallery'>
      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: "row",
          justifyContent: "space-around",
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '8px',
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
                display: 'block',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Portraits;
