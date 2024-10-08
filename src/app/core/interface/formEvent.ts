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


  