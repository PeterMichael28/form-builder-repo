
"use client"

import { useEffect, useState } from "react";
import { FormElementInstance, SubmitFunction } from "../../FormElements";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FileFieldCustomInstance, FileFieldFormElement } from "./FileFieldFormElement";
import { Input } from "@/components/ui/input";




export default function FileFieldFormComponent({
    elementInstance,
    submitValue,
    isInvalid,
    defaultValue,
  }: {
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }) {
    const element = elementInstance as FileFieldCustomInstance;
  
    const [value, setValue] = useState(defaultValue || "");
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setError(isInvalid === true);
    }, [isInvalid]);
  
    const { label, required, helperText } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className={cn(error && "text-red-500")}>
          {label}
          {required && "*"}
        </Label>
        <Input
    className={cn(error && "border-red-500")}
    type="file"
    onChange={(e) => setValue(e.target.value)}
    onBlur={(e) => {
     if (!submitValue) return;
     const valid = FileFieldFormElement.validate(
      element,
      e.target.value
     );
     setError(!valid);
     if (!valid) return;
     submitValue(element.id, e.target.value);
    }}
    value={value}
   />
        {helperText && <p className={cn("text-muted-foreground text-[0.8rem]", error && "text-red-500")}>{helperText !== "Helper text" && helperText}</p>}
      </div>
    );
  }
  