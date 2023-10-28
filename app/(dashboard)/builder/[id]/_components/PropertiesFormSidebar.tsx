import React from "react";

import { FormElements } from "./FormElements";
import { AiOutlineClose } from "react-icons/ai";
import useDesigner from "@/hooks/useDesigner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";


function PropertiesFormSidebar() {
  const { selectedElement, setSelectedElement } = useDesigner();
  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div className="flex flex-col p-2 md:text-sm text-[.7rem]">
      <div className="flex justify-between items-center">
        <p className="md:text-sm text-[.7rem] text-foreground/70">Element properties</p>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setSelectedElement(null);
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <Separator className="mb-4" />
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
}

export default PropertiesFormSidebar;