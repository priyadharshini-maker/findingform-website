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
  { id: '1', number: '01', title: 'Serenity Hillview', category: 'Residential Plotted Development', imageUrl: 'https://i.postimg.cc/MKZPmGyX/HILLVIEW-NIGHT-(1).png' },
  { id: '2', number: '02', title: 'Amber', category: 'Apartment', imageUrl: 'https://i.postimg.cc/t44gbFFT/Whats-App-Image-2026-02-27-at-17-24-51.jpg' },
  { id: '3', number: '03', title: 'Terragreens Rumah Tukad', category: 'Residential Farm Development', imageUrl: 'https://i.postimg.cc/HxH4WSzX/1-(5).png' },
  { id: '4', number: '04', title: 'The Home with the Trapped Gardens', category: 'Individual Residence', imageUrl: 'https://i.postimg.cc/3NNGWzv0/Scene-6-(4).png' },
  { id: '5', number: '05', title: 'Masons Desk', category: 'Furniture design', imageUrl: 'https://i.postimg.cc/LXCYdvbP/IMG-1025.png' },
  { id: '6', number: '06', title: 'White and Grey', category: 'Individual Residence', imageUrl: 'https://i.postimg.cc/CLXw39MP/Whats-App-Image-2025-08-06-at-12-20-19-PM-(2).jpg' },
  { id: '7', number: '07', title: 'The Spanish Dream', category: 'Villa Interiors', imageUrl: 'https://i.postimg.cc/d0nDd4v3/Enscape-2020-11-19-11-07-36-(1).png' },
  { 
    id: '8', 
    number: '08', 
    title: 'Riverstones', 
    category: 'Residential Farm Development', 
    imageUrl: 'https://i.postimg.cc/KvLPLSWr/Scene-1.png',
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
  { id: '9', number: '09', title: 'Number 10 Coffee Stall', category: 'Coffee Kiosk', imageUrl: 'https://i.postimg.cc/d00Z5z54/Gemini-Generated-Image-o6bk1eo6bk1eo6bk.png' },
  { id: '10', number: '10', title: 'Aura', category: 'Restobar', imageUrl: 'https://i.postimg.cc/7YskgdT2/Scene-1(1)-effect-(1).png' },
  { id: '11', number: '11', title: 'Frames and Walls Office', category: 'Office space', imageUrl: 'https://i.postimg.cc/fyswrdws/1-(2).jpg' },
  { id: '12', number: '12', title: 'Hampi House', category: 'Office space', imageUrl: 'https://i.postimg.cc/YChFpcHq/Scene-4-(1)-(1).png' },
];
