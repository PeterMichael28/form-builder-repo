import React from "react";
import {
 ElementsType,
 FormElement,
 FormElementInstance,
} from "../../FormElements";
import { MdTextFields } from "react-icons/md";
import TextFieldDesignerComponent from "./TextFieldDesignerComponent";
import TextFieldPropertiesComponent from "./TextFieldPropertiesComponent";
import TextFieldFormComponent from "./TextFieldFormComponent";

const type: ElementsType = "TextField";

export const TextFieldExtraAttributes = {
 label: "Text field",
 helperText: "Helper text",
 required: false,
 placeHolder: "Value here...",
};
export type TextFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof TextFieldExtraAttributes;
  };
export const TextFieldFormElement: FormElement = {
 type,
 construct: (id: string) => ({
  id,
  type,
  extraAttributes: TextFieldExtraAttributes,
 }),
 designerBtnElement: {
  icon: MdTextFields,
  label: "TextField",
 },
 designerComponent: TextFieldDesignerComponent,
 formComponent: TextFieldFormComponent,
 propertiesComponent: TextFieldPropertiesComponent,

 validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as TextFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};
