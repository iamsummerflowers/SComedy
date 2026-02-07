import image1 from '../assets/heroImage1.jpg';
import image2 from '../assets/heroImage2.jpg';
import image3 from '../assets/heroImage1.jpg';
import video1 from '../assets/heroVideo1.mp4';
import video2 from '../assets/heroVideo2.mp4';

export const heroConfig = {
      heading: "Welcome to Vegas Comedy Club",
      subtext: "Las Vegas' Premier Underground Comedy Experience",
      buttonText: "Learn More",
      media: [
        { type: 'image', src: image1, alt: 'Comedy Stage' },
        { type: 'image', src: image2, alt: 'Audience Laughing' },
        { type: 'image', src: image3, alt: 'Audience Laughing' },
        { type: 'video', src: video1, poster: '../assets/heroImage1.jpg' },
        { type: 'video', src: video2, poster: '../assets/heroImage1.jpg' }
      ]
    };