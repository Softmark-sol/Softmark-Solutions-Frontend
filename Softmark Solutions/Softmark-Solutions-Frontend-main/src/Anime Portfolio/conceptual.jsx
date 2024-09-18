import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../css/gallery.css"

const itemData = [
  {
    img: 'https://fsartmania.com/wp-content/uploads/2023/12/Anime-fit-girl-colored-2-576x1024.jpg',
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2023/12/Anime-Green-Hair-girl-FB-1-501x1024.jpg',
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Delphinnea-539x1024.jpg',
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Mafia-Wolf-485x1024.jpg',
    title: 'portrait',
    rows: 4,
    cols: 3,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Demon-girl-chbi-2-678x1024.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2
  },
  
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Spider-girl-RS-768x796.jpg',
    title: 'portrait',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://fsartmania.com/wp-content/uploads/2024/04/Bike-Furry-768x838.jpg',
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
