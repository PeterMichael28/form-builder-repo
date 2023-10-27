"use client"

import { Bs123 } from "react-icons/bs";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import NumberFieldDesignerComponent from "./NumberFieldDesignerComponent";
import NumberFieldFormComponent from "./NumberFieldFormComponent";
import NumberFieldPropertiesComponent from "./NumberFieldPropertiesComponent";

const type: ElementsType = "NumberField";

const NumberFieldExtraAttributes = {
  label: "Number field",
  helperText: "Helper text",
  required: false,
  placeHolder: "0",
};

export type NumberFieldCustomInstance = FormElementInstance & {
    extraAttributes: typeof NumberFieldExtraAttributes;
  };

export const NumberFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
      id,
      type,
      extraAttributes: NumberFieldExtraAttributes,
    }),
    designerBtnElement: {
      icon: Bs123,
      label: "Number Field",
    },
    designerComponent: NumberFieldDesignerComponent,
    formComponent: NumberFieldFormComponent,
    propertiesComponent: NumberFieldPropertiesComponent,
  
    validate: (formElement: FormElementInstance, currentValue: string): boolean => {
      const element = formElement as NumberFieldCustomInstance;
      if (element.extraAttributes.required) {
        return currentValue.length > 0;
      }
  
      return true;
    },
  };