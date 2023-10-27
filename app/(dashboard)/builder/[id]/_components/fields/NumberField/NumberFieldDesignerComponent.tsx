// NumberFieldDesignerComponent

import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { NumberFieldCustomInstance } from "./NumberFieldFormElement";
import { Input } from "@/components/ui/input";

export default function NumberFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as NumberFieldCustomInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Input readOnly disabled type="number" placeholder={placeHolder} />
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }