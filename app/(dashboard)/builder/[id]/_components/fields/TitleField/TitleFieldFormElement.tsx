"use client";




import { LuHeading1 } from "react-icons/lu";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import TitleFieldDesignerComponent from "./TitleFieldDesignerComponent";
import TitleFieldPropertiesComponent from "./TitleFieldPropertiesComponent";
import TitleFieldFormComponent from "./TitleFieldFormComponent";

const type: ElementsType = "TitleField";

export const textFieldExtraAttributes = {
  title: "Title field",
};



export type TitleFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof textFieldExtraAttributes;
  };

const TitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: textFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: LuHeading1,
    label: "Title field",
  },
  designerComponent: TitleFieldDesignerComponent,
  formComponent: TitleFieldFormComponent,
  propertiesComponent: TitleFieldPropertiesComponent,

  validate: () => true,
};


export default TitleFieldFormElement