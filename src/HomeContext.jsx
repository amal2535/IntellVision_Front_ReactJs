import React from 'react';
import { createContext,useState } from 'react';

export const homecontext =createContext(
   {
     steps:[
        { step: 0, etat: true },
        { step: 1, etat: false },
        { step: 2, etat: false },
        { step: 3, etat: false},
        { step: 4, etat: false },
        { step: 5, etat: false }
    ],
    setStepToTrue:()=>{},
    getStepStatus:()=>{},
    }
)

export function HomeProvider({children}) {
    
    const [steps, setSteps] = useState([
        { step: 0, etat: true },
        { step: 1, etat: false },
        { step: 2, etat: false },
        { step: 3, etat: false},
        { step: 4, etat: false },
        { step: 5, etat: false }
    ])

    const setStepToTrue = (step) => {

       setSteps(prevSteps=>prevSteps.map(item=>({...item, etat:item.step===step})))
    }

    const getStepStatus = (step) => {

        const item=steps.find(item=>item.step===step);
        return item ? item.etat : null;

    }
    
  return (
   <homecontext.Provider value={{setStepToTrue,getStepStatus,steps}}>
       {children}
   </homecontext.Provider>
  );
}
