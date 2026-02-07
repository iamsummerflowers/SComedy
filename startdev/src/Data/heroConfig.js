import image1 from '../assets/heroImage1.jpg';
import image2 from '../assets/heroImage2.jpg';
import image3 from '../assets/heroImage1.jpg';
import video1 from '../assets/heroVideo1.mp4';
import video2 from '../assets/heroVideo2.mp4';

export const heroConfig = {
      heading: "Laughter`s In the name",
      subtext: "To follow Slaughter Comedy gigs and more via mobile: Type keyword <laughster> and send to 85100",
      buttonText: "Learn More",
      media: [
        { type: 'image', src: image1, alt: 'Comedy Stage' },
        { type: 'video', src: video1, poster: image1 },
        { type: 'image', src: image2, alt: 'Audience Laughing' },
        { type: 'video', src: video2, poster: image1 },
        { type: 'image', src: image3, alt: 'Audience Laughing' }
      ]
    };