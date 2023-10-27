"use client"

import { LuSeparatorHorizontal } from "react-icons/lu";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import SpacerFieldDesignerComponent from "./SpacerFieldDesignerComponent";
import SpacerFieldFormComponent from "./SpacerFieldFormComponent";
import SpacerFieldPropertiesComponent from "./SpacerFieldPropertiesComponent";

const type: ElementsType = "SpacerField";

const SpacerFieldExtraAttributes = {
    height: 20, // px
};
  

export type SpacerFieldCustomInstance = FormElementInstance & {
  extraAttributes: typeof SpacerFieldExtraAttributes;
};


export const SpacerFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
      id,
      type,
      extraAttributes: SpacerFieldExtraAttributes,
    }),
    designerBtnElement: {
      icon: LuSeparatorHorizontal,
      label: "Spacer field",
    },
    designerComponent: SpacerFieldDesignerComponent,
    formComponent: SpacerFieldFormComponent,
    propertiesComponent: SpacerFieldPropertiesComponent,
  
    validate: () => true,
  };
  