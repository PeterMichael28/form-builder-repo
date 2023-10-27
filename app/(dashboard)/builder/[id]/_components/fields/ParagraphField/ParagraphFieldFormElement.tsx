"use client"

import { BsTextParagraph } from "react-icons/bs";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import ParagraphFieldDesignerComponent from "./ParagraphFieldDesignerComponent";
import ParagraphFieldFormComponent from "./ParagraphFieldFormComponent";
import ParagraphFieldPropertiesComponent from "./ParagraphFieldPropertiesComponent";

const type: ElementsType = "ParagraphField";




const ParagraphFieldExtraAttributes = {
    text: "Text here",
  };

  export type ParagraphFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof ParagraphFieldExtraAttributes;
  };




  export const ParagraphFieldFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
      id,
      type,
      extraAttributes: ParagraphFieldExtraAttributes,
    }),
    designerBtnElement: {
      icon: BsTextParagraph,
      label: "Paragraph field",
    },
    designerComponent: ParagraphFieldDesignerComponent,
    formComponent: ParagraphFieldFormComponent,
    propertiesComponent: ParagraphFieldPropertiesComponent,
  
    validate: () => true,
  };