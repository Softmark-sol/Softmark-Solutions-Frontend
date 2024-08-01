import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css";

const itemData = [
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Em1-768x388.jpg',
    title: 'portrait',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Em2-768x388.jpg',
    title: 'portrait',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Em3-768x388.jpg',
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
