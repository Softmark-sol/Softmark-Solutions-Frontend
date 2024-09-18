import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css"

const itemData = [
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/3-768x904.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/4-1-768x904.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/5-1-768x904.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Por1-689x1024.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/1-768x904.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/2-768x904.jpg',
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
