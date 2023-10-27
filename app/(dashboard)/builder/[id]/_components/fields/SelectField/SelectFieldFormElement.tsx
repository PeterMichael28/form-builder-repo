import { z } from "zod";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import { RxDropdownMenu } from "react-icons/rx";
import SelectFieldDesignerComponent from "./SelectFieldDesignerComponent";
import SelectFieldFormComponent from "./SelectFieldFormComponent";
import SelectFieldPropertiesComponent from "./SelectFieldPropertiesComponent";

const type: ElementsType = "SelectField";

export const SelectFieldExtraAttributes = {
  label: "Select field",
  helperText: "Helper text",
  required: false,
  placeHolder: "Value here...",
  options: [],
};

export const SelectFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
  options: z.array(z.string()).default([]),
});

export const SelectFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: SelectFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: RxDropdownMenu,
    label: "Select Field",
  },
  designerComponent: SelectFieldDesignerComponent,
  formComponent: SelectFieldFormComponent,
  propertiesComponent: SelectFieldPropertiesComponent,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as SelectFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type SelectFieldCustomInstance = FormElementInstance & {
  extraAttributes: typeof SelectFieldExtraAttributes;
};
