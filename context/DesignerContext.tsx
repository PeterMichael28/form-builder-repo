"use client"

import { FormElementInstance } from "@/app/(dashboard)/builder/[id]/_components/FormElements";
import React, { Dispatch, SetStateAction, createContext, useCallback, useMemo, useState } from "react";


type DesignerContextType = {
    elements: FormElementInstance[];
    setElements: Dispatch<SetStateAction<FormElementInstance[]>>;
    addElement: (index: number, element: FormElementInstance) => void;
    removeElement: (id: string) => void;
  
    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
  
    updateElement: (id: string, element: FormElementInstance) => void;
};
  
export  const DesignerContext = createContext<DesignerContextType | null>(null)
  
export default function DesignerContextProvider( { children }: {children: React.ReactNode} ) {
    
    const [elements, setElements] = useState<FormElementInstance[]>([]);
    const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);


    const addElement = useCallback((index: number, element: FormElementInstance) => {
      setElements((prev) => {
        const newElements = [...prev];
        newElements.splice(index, 0, element);
        return newElements;
      });
    }, [setElements]);

    const removeElement = useCallback((id: string) => {
      setElements((prev) => prev.filter((element) => element.id !== id));
    }, [setElements]);

    const updateElement = useCallback((id: string, element: FormElementInstance) => {
      setElements((prev) => {
        const newElements = [...prev];
        const index = newElements.findIndex((el) => el.id === id);
        newElements[index] = element;
        return newElements;
      });
    }, [setElements]);

      const value = useMemo(() => ({
        elements,
        setElements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }), [elements, setElements, addElement, removeElement, selectedElement, setSelectedElement, updateElement]);
  return <DesignerContext.Provider 
  value={value}
    >

        {children}
    </DesignerContext.Provider>
}