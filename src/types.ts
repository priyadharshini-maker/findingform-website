export interface ProjectGalleryCategory {
  name: string;
  images: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  galleries?: ProjectGalleryCategory[];
}

export const projects: Project[] = [
  { 
    id: '1', 
    number: '01', 
    title: 'Serenity Hillview', 
    category: 'Residential Plotted Development', 
    imageUrl: 'https://i.postimg.cc/MKZPmGyX/HILLVIEW-NIGHT-(1).png',
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/tC1G0Rf2/2-(1).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/t44gbFFT/Whats_App_Image_2026_02_27_at_17_24_51.jpg'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/Gc3wrjZp/1-(6).png',
          'https://i.postimg.cc/dqQPv9zK/1-1-Photo.jpg',
          'https://i.postimg.cc/W2pLj7QL/1-1-Photo-(2).jpg',
          'https://i.postimg.cc/bzYc8RKp/1-1-Photo-(5)-(1).jpg',
          'https://i.postimg.cc/tXRQyzLj/2-(3).jpg',
          'https://i.postimg.cc/cs1yZcV8/3-(1)-(1).png',
          'https://i.postimg.cc/gYM90ZWx/3-(2).png',
          'https://i.postimg.cc/Pt6Gqwjv/4-(4).png',
          'https://i.postimg.cc/tXRQyzL4/5.jpg',
          'https://i.postimg.cc/Pt6GqwjW/5-(2).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/xQWx3Rtk/1-(7).png',
          'https://i.postimg.cc/3hPSFBnr/2-(2).png',
          'https://i.postimg.cc/6BYbVxms/Scene-10.png',
          'https://i.postimg.cc/4JyLB2DX/Scene-11-(3).png',
          'https://i.postimg.cc/74psnVmZ/Scene-5-(1).png',
          'https://i.postimg.cc/VYvGDZxF/Scene-6-(5).png',
          'https://i.postimg.cc/tXcrftb6/Scene-9-(2).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/NBxdYwYX/IMG-1025-(1).png',
          'https://i.postimg.cc/mBSmRGR7/IMG-1026.png',
          'https://i.postimg.cc/xnP6YSYK/IMG-1027.png',
          'https://i.postimg.cc/PTMShkhv/IMG-1028.png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/jRFQdx10/Enscape-2020-12-28-18-09-01.png',
          'https://i.postimg.cc/D7MdyvNV/Enscape-2020-12-28-18-39-25.png',
          'https://i.postimg.cc/8T5mSJZS/Whats-App-Image-2025-08-04-at-4-20-15-PM.jpg',
          'https://i.postimg.cc/NQMkc9ds/Whats-App-Image-2025-08-04-at-4-20-16-PM.jpg',
          'https://i.postimg.cc/Vz6W8rKw/Whats-App-Image-2025-08-04-at-4-20-16-PM-(1).jpg',
          'https://i.postimg.cc/4XSbNf0R/Whats-App-Image-2025-08-06-at-12-20-19-PM-(3).jpg',
          'https://i.postimg.cc/dJ1jYk5Q/Whats-App-Image-2025-08-06-at-12-20-20-PM.jpg'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/Qj9Kmp6Z/Enscape-2020-11-19-11-02-09.png',
          'https://i.postimg.cc/k76Rsxjm/Enscape-2020-11-19-11-07-36-(2).png',
          'https://i.postimg.cc/x9JN5KsD/Enscape-2020-11-19-11-19-39.png',
          'https://i.postimg.cc/XnGBLwsR/Enscape-2020-11-19-11-24-56.png',
          'https://i.postimg.cc/8NnrLybS/Enscape-2020-11-19-11-32-10.png',
          'https://i.postimg.cc/HdP7bStC/Enscape-2020-11-19-11-33-18.png',
          'https://i.postimg.cc/hc37VC0F/Enscape-2020-11-19-11-36-40.png',
          'https://i.postimg.cc/7wQTSBNr/Enscape-2020-11-19-11-39-05.png'
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
    galleries: [
      {
        name: 'Villa 1',
        images: [
          'https://i.postimg.cc/CFBdvH7g/Image(1).png',
          'https://i.postimg.cc/3K4WLC1y/Scene-11-(2).png',
          'https://i.postimg.cc/Gc89MJKw/Scene-12(1)-(1).png',
          'https://i.postimg.cc/r80zhCJv/Scene-14(1).png',
          'https://i.postimg.cc/QX9V6kbv/Scene-15(1).png'
        ]
      },
      {
        name: 'Villa 2',
        images: [
          'https://i.postimg.cc/XN7bPnWp/4-(3).png',
          'https://i.postimg.cc/HHpdn9Mk/Scene-1.png',
          'https://i.postimg.cc/pVXHSPv8/Scene-2-(1).png',
          'https://i.postimg.cc/h4PBYKnh/Scene-2(1).png',
          'https://i.postimg.cc/kJyCwB0x/Scene-6-(1).png'
        ]
      },
      {
        name: 'Villa 3',
        images: [
          'https://i.postimg.cc/Dv7kW78B/Scene-1-(1).png',
          'https://i.postimg.cc/qksHMNMs/Scene-2-(2).png',
          'https://i.postimg.cc/W2Gcbdb7/Scene-3.png',
          'https://i.postimg.cc/3KXQJkJC/Scene-4-(2).png',
          'https://i.postimg.cc/gYVbkxkD/Scene-6-(3).png'
        ]
      },
      {
        name: 'Entrance',
        images: [
          'https://i.postimg.cc/NYMGbxjC/5-(1).png',
          'https://i.postimg.cc/b8JYLRvh/6-(2).png',
          'https://i.postimg.cc/PhxfKM5F/Scene-6-(2).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/KxVR11ZZ/Gemini-Generated-Image-bj2cr7bj2cr7bj2c.png',
          'https://i.postimg.cc/kqZB22nM/Gemini-Generated-Image-o6bk1eo6bk1eo6bk-(1).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/6WYQt3HM/Scene-1(1)-effect-(2).png',
          'https://i.postimg.cc/6WYQt3HD/Scene-2-(3).png'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/8NqMqKf4/1-(3).jpg',
          'https://i.postimg.cc/6tDnDj4f/2-(4).jpg',
          'https://i.postimg.cc/KxdBdq3N/3-(1).jpg',
          'https://i.postimg.cc/DntLtj4c/4-(1).jpg'
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
    galleries: [
      {
        name: 'Gallery',
        images: [
          'https://i.postimg.cc/2mg16qjR/Scene-4-(1)-(3).png',
          'https://i.postimg.cc/sybMXBjt/Scene2-(1)-(1).png'
        ]
      }
    ]
  },
];
