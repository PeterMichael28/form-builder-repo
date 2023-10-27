

import { z } from "zod";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import { BsTextareaResize } from "react-icons/bs";
import TextAreaFieldDesignerComponent from "./TextAreaFieldDesignerComponent";
import TextAreaFieldFormComponent from "./TextAreaFieldFormComponent";
import TextAreaFieldPropertiesComponent from "./TextAreaFieldPropertiesComponent";

const type: ElementsType = "TextAreaField";

export const TextAreaFieldExtraAttributes = {
  label: "Text area",
  helperText: "Helper text",
  required: false,
  placeHolder: "Value here...",
  rows: 3,
};

export const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  rows: z.number().min(1).max(10),
});

export const TextAreaFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: TextAreaFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: BsTextareaResize,
    label: "TextArea Field",
  },
  designerComponent: TextAreaFieldDesignerComponent,
  formComponent: TextAreaFieldFormComponent,
  propertiesComponent: TextAreaFieldPropertiesComponent,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as TextAreaFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type TextAreaFieldCustomInstance = FormElementInstance & {
  extraAttributes: typeof TextAreaFieldExtraAttributes;
};