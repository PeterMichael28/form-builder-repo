

import { Label } from "@/components/ui/label";
import { FormElementInstance } from "../../FormElements";
import { DateFieldCustomInstance } from "./DateFieldFormElement";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";


export default function DateFieldDesignerComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
    const element = elementInstance as DateFieldCustomInstance;
    const { label, required, placeHolder, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label>
          {label}
          {required && "*"}
        </Label>
        <Button variant={"outline"} className="w-full justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Pick a date</span>
        </Button>
        {helperText && <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>}
      </div>
    );
  }