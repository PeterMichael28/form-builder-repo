"use client";

import { LuHeading2 } from "react-icons/lu";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import SubtileFieldDesignerComponent from "./SubtileFieldDesignerComponent";
import SubtileFieldFormComponent from "./SubtileFieldFormComponent";
import SubtileFieldPropertiesComponent from "./SubtileFieldPropertiesComponent";

const type: ElementsType = "SubTitleField";

const SubTitleFieldExtraAttributes = {
  title: "SubTitle field",
};



 const SubTitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: SubTitleFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: LuHeading2,
    label: "SubTitle field",
  },
  designerComponent: SubtileFieldDesignerComponent,
  formComponent: SubtileFieldFormComponent,
  propertiesComponent: SubtileFieldPropertiesComponent,

  validate: () => true,
};

export default SubTitleFieldFormElement

export type SubtitleCustomInstance = FormElementInstance & {
  extraAttributes: typeof SubTitleFieldExtraAttributes;
};