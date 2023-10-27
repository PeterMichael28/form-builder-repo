// 

import { Checkbox } from "@radix-ui/react-checkbox";
import { FormElementInstance } from "../../FormElements";
import { Label } from "@/components/ui/label";
import { CheckboxFieldCustomInstance } from "./CheckboxFieldFormElement";

export default function CheckboxFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as CheckboxFieldCustomInstance;
    const { label, required, helperText } = element.extraAttributes;
    const id = `checkbox-${element.id}`;
    return (
      <div className="flex items-top space-x-2">
        <Checkbox id={id} />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor={id}>
            {label}
            {required && "*"}
          </Label>
          {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText !== "Helper Text" && helperText}</p>}
        </div>
      </div>
    );
  }