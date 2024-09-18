import ReactPixel from 'react-facebook-pixel';

export const initFacebookPixel = () => {
  ReactPixel.init('1657050378422299');
  ReactPixel.pageView(); 
};
