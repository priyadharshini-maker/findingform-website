export interface ProjectGalleryCategory {
  name: string;
  images: (string | { url: string; caption: string })[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  galleries?: ProjectGalleryCategory[];
}

export const projects: Project[] = [
  { 
    id: '1', 
    number: '01', 
    title: 'Serenity Hillview', 
    category: 'Residential Plotted Development', 
    imageUrl: 'https://i.postimg.cc/MKZPmGyX/HILLVIEW-NIGHT-(1).png',
    description: 'A premium residential plotted development offering lush green landscapes and modern amenities. Experience tranquil living with thoughtfully designed spaces that harmonize with nature.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/tC1G0Rf2/2-(1).png', caption: 'Entrance' }
        ]
      }
    ]
  },
  { 
    id: '2', 
    number: '02', 
    title: 'Amber', 
    category: 'Apartment', 
    imageUrl: 'https://i.postimg.cc/t44gbFFT/Whats_App_Image_2026_02_27_at_17_24_51.jpg',
    description: 'An elegant apartment complex featuring contemporary architecture and luxurious interiors. Designed for urban living with a perfect blend of comfort and sophistication.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/t44gbFFT/Whats_App_Image_2026_02_27_at_17_24_51.jpg', caption: 'Full view' }
        ]
      }
    ]
  },
  { 
    id: '3', 
    number: '03', 
    title: 'Terragreens', 
    category: 'Residential Farm Development', 
    imageUrl: 'https://i.postimg.cc/HxH4WSzX/1-(5).png',
    description: 'A sprawling residential farm development that brings you closer to nature. Enjoy spacious farmhouses surrounded by organic gardens and serene landscapes.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/Gc3wrjZp/1-(6).png', caption: 'Aerial Masterplan' },
          { url: 'https://i.postimg.cc/dqQPv9zK/1-1-Photo.jpg', caption: 'Farmhouse Exterior' },
          { url: 'https://i.postimg.cc/W2pLj7QL/1-1-Photo-(2).jpg', caption: 'Living Area' },
          { url: 'https://i.postimg.cc/bzYc8RKp/1-1-Photo-(5)-(1).jpg', caption: 'Bedroom Interior' },
          { url: 'https://i.postimg.cc/tXRQyzLj/2-(3).jpg', caption: 'Garden View' },
          { url: 'https://i.postimg.cc/cs1yZcV8/3-(1)-(1).png', caption: 'Pathway' },
          { url: 'https://i.postimg.cc/gYM90ZWx/3-(2).png', caption: 'Lounge Area' },
          { url: 'https://i.postimg.cc/Pt6Gqwjv/4-(4).png', caption: 'Dining Space' },
          { url: 'https://i.postimg.cc/tXRQyzL4/5.jpg', caption: 'Outdoor Seating' },
          { url: 'https://i.postimg.cc/Pt6GqwjW/5-(2).png', caption: 'Landscape Details' }
        ]
      }
    ]
  },
  { 
    id: '4', 
    number: '04', 
    title: 'The Home with the Trapped Gardens', 
    category: 'Individual Residence', 
    imageUrl: 'https://i.postimg.cc/3NNGWzv0/Scene-6-(4).png',
    description: 'A unique individual residence built around internal courtyards and trapped gardens. Natural light and greenery seamlessly integrate into the living spaces.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/xQWx3Rtk/1-(7).png', caption: 'Courtyard' },
          { url: 'https://i.postimg.cc/3hPSFBnr/2-(2).png', caption: 'Living Room' },
          { url: 'https://i.postimg.cc/6BYbVxms/Scene-10.png', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/4JyLB2DX/Scene-11-(3).png', caption: 'Master Bedroom' },
          { url: 'https://i.postimg.cc/74psnVmZ/Scene-5-(1).png', caption: 'Bathroom' },
          { url: 'https://i.postimg.cc/VYvGDZxF/Scene-6-(5).png', caption: 'Garden Patio' },
          { url: 'https://i.postimg.cc/tXcrftb6/Scene-9-(2).png', caption: 'Exterior Facade' }
        ]
      }
    ]
  },
  { 
    id: '5', 
    number: '05', 
    title: 'Masons Desk', 
    category: 'Furniture design', 
    imageUrl: 'https://i.postimg.cc/LXCYdvbP/IMG-1025.png',
    description: 'A bespoke furniture design piece crafted with precision and elegance. Combining functional ergonomics with minimalist aesthetics for the modern workspace.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/NBxdYwYX/IMG-1025-(1).png', caption: 'Desk Front View' },
          { url: 'https://i.postimg.cc/mBSmRGR7/IMG-1026.png', caption: 'Desk Side View' },
          { url: 'https://i.postimg.cc/xnP6YSYK/IMG-1027.png', caption: 'Detail Shot' },
          { url: 'https://i.postimg.cc/PTMShkhv/IMG-1028.png', caption: 'Workspace Setup' }
        ]
      }
    ]
  },
  { 
    id: '6', 
    number: '06', 
    title: 'White and Grey', 
    category: 'Individual Residence', 
    imageUrl: 'https://i.postimg.cc/CLXw39MP/Whats-App-Image-2025-08-06-at-12-20-19-PM-(2).jpg',
    description: 'A modern individual residence characterized by its striking monochromatic palette. Clean lines and minimalist design create a sophisticated and timeless home.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/jRFQdx10/Enscape-2020-12-28-18-09-01.png', caption: 'Front Elevation' },
          { url: 'https://i.postimg.cc/D7MdyvNV/Enscape-2020-12-28-18-39-25.png', caption: 'Living Area' },
          { url: 'https://i.postimg.cc/8T5mSJZS/Whats-App-Image-2025-08-04-at-4-20-15-PM.jpg', caption: 'Dining Space' },
          { url: 'https://i.postimg.cc/NQMkc9ds/Whats-App-Image-2025-08-04-at-4-20-16-PM.jpg', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/Vz6W8rKw/Whats-App-Image-2025-08-04-at-4-20-16-PM-(1).jpg', caption: 'Bedroom' },
          { url: 'https://i.postimg.cc/4XSbNf0R/Whats-App-Image-2025-08-06-at-12-20-19-PM-(3).jpg', caption: 'Balcony View' },
          { url: 'https://i.postimg.cc/dJ1jYk5Q/Whats-App-Image-2025-08-06-at-12-20-20-PM.jpg', caption: 'Bathroom' }
        ]
      }
    ]
  },
  { 
    id: '7', 
    number: '07', 
    title: 'The Spanish Dream', 
    category: 'Villa Interiors', 
    imageUrl: 'https://i.postimg.cc/d0nDd4v3/Enscape-2020-11-19-11-07-36-(1).png',
    description: 'Luxurious villa interiors inspired by classic Spanish architecture. Warm tones, rustic textures, and elegant detailing bring Mediterranean charm to life.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/Qj9Kmp6Z/Enscape-2020-11-19-11-02-09.png', caption: 'Living Room' },
          { url: 'https://i.postimg.cc/k76Rsxjm/Enscape-2020-11-19-11-07-36-(2).png', caption: 'Dining Area' },
          { url: 'https://i.postimg.cc/x9JN5KsD/Enscape-2020-11-19-11-19-39.png', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/XnGBLwsR/Enscape-2020-11-19-11-24-56.png', caption: 'Master Bedroom' },
          { url: 'https://i.postimg.cc/8NnrLybS/Enscape-2020-11-19-11-32-10.png', caption: 'Guest Bedroom' },
          { url: 'https://i.postimg.cc/HdP7bStC/Enscape-2020-11-19-11-33-18.png', caption: 'Bathroom' },
          { url: 'https://i.postimg.cc/hc37VC0F/Enscape-2020-11-19-11-36-40.png', caption: 'Hallway' },
          { url: 'https://i.postimg.cc/7wQTSBNr/Enscape-2020-11-19-11-39-05.png', caption: 'Patio' }
        ]
      }
    ]
  },
  { 
    id: '8', 
    number: '08', 
    title: 'Riverstones', 
    category: 'Residential Farm Development', 
    imageUrl: 'https://i.postimg.cc/fWfQD02q/Scene-6-(2).png',
    description: 'An exclusive residential farm development featuring premium villas. Nestled along a gentle river, offering a perfect retreat with resort-style amenities.',
    galleries: [
      {
        name: 'Villa 1',
        images: [
          { url: 'https://i.postimg.cc/CFBdvH7g/Image(1).png', caption: 'Exterior View' },
          { url: 'https://i.postimg.cc/3K4WLC1y/Scene-11-(2).png', caption: 'Living Area' },
          { url: 'https://i.postimg.cc/Gc89MJKw/Scene-12(1)-(1).png', caption: 'Bedroom' },
          { url: 'https://i.postimg.cc/r80zhCJv/Scene-14(1).png', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/QX9V6kbv/Scene-15(1).png', caption: 'Bathroom' }
        ]
      },
      {
        name: 'Villa 2',
        images: [
          { url: 'https://i.postimg.cc/XN7bPnWp/4-(3).png', caption: 'Exterior View' },
          { url: 'https://i.postimg.cc/HHpdn9Mk/Scene-1.png', caption: 'Living Area' },
          { url: 'https://i.postimg.cc/pVXHSPv8/Scene-2-(1).png', caption: 'Bedroom' },
          { url: 'https://i.postimg.cc/h4PBYKnh/Scene-2(1).png', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/kJyCwB0x/Scene-6-(1).png', caption: 'Bathroom' }
        ]
      },
      {
        name: 'Villa 3',
        images: [
          { url: 'https://i.postimg.cc/Dv7kW78B/Scene-1-(1).png', caption: 'Exterior View' },
          { url: 'https://i.postimg.cc/qksHMNMs/Scene-2-(2).png', caption: 'Living Area' },
          { url: 'https://i.postimg.cc/W2Gcbdb7/Scene-3.png', caption: 'Bedroom' },
          { url: 'https://i.postimg.cc/3KXQJkJC/Scene-4-(2).png', caption: 'Kitchen' },
          { url: 'https://i.postimg.cc/gYVbkxkD/Scene-6-(3).png', caption: 'Bathroom' }
        ]
      },
      {
        name: 'Entrance',
        images: [
          { url: 'https://i.postimg.cc/NYMGbxjC/5-(1).png', caption: 'Main Gate' },
          { url: 'https://i.postimg.cc/b8JYLRvh/6-(2).png', caption: 'Driveway' },
          { url: 'https://i.postimg.cc/PhxfKM5F/Scene-6-(2).png', caption: 'Security Cabin' }
        ]
      }
    ]
  },
  { 
    id: '9', 
    number: '09', 
    title: 'Number 10 Coffee Stall', 
    category: 'Coffee Kiosk', 
    imageUrl: 'https://i.postimg.cc/d00Z5z54/Gemini-Generated-Image-o6bk1eo6bk1eo6bk.png',
    description: 'A compact and stylish coffee kiosk designed for high-footfall urban areas. Efficient layout meets inviting aesthetics to create the perfect coffee stop.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/KxVR11ZZ/Gemini-Generated-Image-bj2cr7bj2cr7bj2c.png', caption: 'Kiosk Front View' },
          { url: 'https://i.postimg.cc/kqZB22nM/Gemini-Generated-Image-o6bk1eo6bk1eo6bk-(1).png', caption: 'Kiosk Side View' }
        ]
      }
    ]
  },
  { 
    id: '10', 
    number: '10', 
    title: 'Aura', 
    category: 'Restobar', 
    imageUrl: 'https://i.postimg.cc/7YskgdT2/Scene-1(1)-effect-(1).png',
    description: 'A vibrant restobar featuring atmospheric lighting and contemporary design. The perfect setting for immersive dining and unforgettable evening experiences.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/6WYQt3HM/Scene-1(1)-effect-(2).png', caption: 'Bar Counter' },
          { url: 'https://i.postimg.cc/6WYQt3HD/Scene-2-(3).png', caption: 'Seating Area' }
        ]
      }
    ]
  },
  { 
    id: '11', 
    number: '11', 
    title: 'Frames and Walls Office', 
    category: 'Office space', 
    imageUrl: 'https://i.postimg.cc/fyswrdws/1-(2).jpg',
    description: 'A modern office space designed to foster creativity and collaboration. Features open workspaces, elegant meeting rooms, and inspiring executive cabins.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/8NqMqKf4/1-(3).jpg', caption: 'Reception' },
          { url: 'https://i.postimg.cc/6tDnDj4f/2-(4).jpg', caption: 'Workspace' },
          { url: 'https://i.postimg.cc/KxdBdq3N/3-(1).jpg', caption: 'Meeting Room' },
          { url: 'https://i.postimg.cc/DntLtj4c/4-(1).jpg', caption: 'Director Cabin' }
        ]
      }
    ]
  },
  { 
    id: '12', 
    number: '12', 
    title: 'Hampi House', 
    category: 'Office space', 
    imageUrl: 'https://i.postimg.cc/YChFpcHq/Scene-4-(1)-(1).png',
    description: 'A culturally inspired office space blending traditional elements with modern functionality. Designed to reflect heritage while supporting contemporary work styles.',
    galleries: [
      {
        name: 'Gallery',
        images: [
          { url: 'https://i.postimg.cc/2mg16qjR/Scene-4-(1)-(3).png', caption: 'Exterior View' },
          { url: 'https://i.postimg.cc/sybMXBjt/Scene2-(1)-(1).png', caption: 'Interior Workspace' }
        ]
      }
    ]
  },
];
