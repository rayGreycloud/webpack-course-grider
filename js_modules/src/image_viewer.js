// Import images
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
// Add css file
import '../styles/image_viewer.css';

// Create image element
const image = document.createElement('img');
// Set img src
image.src = small;
// Append img tag to body
document.body.appendChild(image);

// Create image element
const bigImage = document.createElement('img');
// Set img src
bigImage.src = big;
// Append img tag to body
document.body.appendChild(bigImage);
