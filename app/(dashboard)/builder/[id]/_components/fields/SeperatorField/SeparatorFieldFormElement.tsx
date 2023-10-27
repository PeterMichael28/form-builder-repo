// SeparatorFieldFormElement
"use client"

import { ElementsType, FormElement } from "../../FormElements";
import { RiSeparator } from "react-icons/ri"
import SeparatorFieldDesignerComponent from "./SeparatorFieldDesignerComponent";
import SeparatorFieldFormComponent from "./SeparatorFieldFormComponent";
import SeparatorFieldPropertiesComponent from "./SeparatorFieldPropertiesComponent";


const type: ElementsType = "SeparatorField";

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
  }),
  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator field",
  },
  designerComponent: SeparatorFieldDesignerComponent,
  formComponent: SeparatorFieldFormComponent,
  propertiesComponent: SeparatorFieldPropertiesComponent,

  validate: () => true,
};