export interface Category {
    id: number;
    events: any; 
    img: string;
    color: string;
    name: string;
  }
  
  export interface EventDataForm {
    id: number;
    title: string;
    description: string;
    localisation: string;
    fromDate: string; 
    toDate: string;
    startRegistration: string;
    endRegistration: string;
    price: string;
    gender: string;
    mixte: boolean;
    maxParticipant: number;
    owner: number;
    imgUrl: string[]; 
    categories: Category[];
    status: string;
    createdAt: string;
    updatedAt: string;
  }
  