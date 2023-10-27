import { z } from "zod";
import { ElementsType, FormElement, FormElementInstance } from "../../FormElements";
import { IoMdCheckbox } from "react-icons/io";
import CheckboxFieldDesignerComponent from "./CheckboxFieldDesignerComponent";
import CheckboxFieldFormComponent from "./CheckboxFieldFormComponent";
import CheckboxFieldPropertiesComponent from "./CheckboxFieldPropertiesComponent";

const type: ElementsType = "CheckboxField";

export const CheckboxFieldExtraAttributes = {
  label: "Checkbox field",
  helperText: "Helper text",
  required: false,
};

export const CheckboxFieldPropertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});

export const CheckboxFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes:CheckboxFieldExtraAttributes,
  }),
  designerBtnElement: {
    icon: IoMdCheckbox,
    label: "CheckBox Field",
  },
  designerComponent: CheckboxFieldDesignerComponent,
  formComponent: CheckboxFieldFormComponent,
  propertiesComponent: CheckboxFieldPropertiesComponent,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as CheckboxFieldCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue === "true";
    }

    return true;
  },
};

export type CheckboxFieldCustomInstance = FormElementInstance & {
  extraAttributes: typeof CheckboxFieldExtraAttributes;
};