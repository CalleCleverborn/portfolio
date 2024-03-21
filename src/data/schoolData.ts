import { SchoolItem } from '../models/types'; // Importing the type
import mediagymnasiet from '../assets/mediagymnasiet.jpg';
import medieinstitutet from '../assets/medieinstitutet.png';

export const schoolData: SchoolItem[] = [
    { id: 1, url:mediagymnasiet, description: ' Information and Media Technology', label: 'Mediagymnasiet', time: "2016-2019"},
    { id: 3, url:medieinstitutet, description: 'E-commerce Web Development', label: 'Medieinstitutet', time: "2023-ongoing"}
]