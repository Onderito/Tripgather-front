export interface StepOne {
    title: string;
    start: string; 
    back: string; 
    budget: number; 
    nbMenber: number; 
    gender: 'man' | 'woman'; 
}
  
export interface StepTwo {
    description: string;
    image: string[]; 
    category : []
}
  
export interface FinalStep {
    stepOne: StepOne;
    stepTwo: StepTwo;
}

export interface Country {
    admin1: string;
    admin2: string;
    country: string;
    displayName: string;
    lat: string;
    lng: string;
    name: string;
  }
  
  export interface Category {
    category: string;
    color: string;
  }
  
  export interface EventData {
    title: string;
    start: string;
    back: string;
    budget: number;
    country: Country;
    editorContent: string;
    gender: string;
    nbMember: number;
    selectedCategories: Category[];
    url: string;
  }
  
  