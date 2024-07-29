import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css";

const itemData = [
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Por4-689x1024.jpg',
    title: 'barber',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Por3-689x1024.jpg',
    title: 'barber',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Por2-689x1024.jpg',
    title: 'barber',
    rows: 1,
    cols: 1,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Por1-689x1024.jpg',
    title: 'barber',
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '8px', // Optional: Adds spacing between images
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
                display: 'block'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default Portraits;
