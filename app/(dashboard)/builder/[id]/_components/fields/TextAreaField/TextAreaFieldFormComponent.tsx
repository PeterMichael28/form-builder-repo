
"use client"

import { useEffect, useState } from "react";
import { FormElementInstance, SubmitFunction } from "../../FormElements";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { TextAreaFieldCustomInstance, TextAreaFormElement } from "./TextAreaFormElement";



export default function TextAreaFieldFormComponent({
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
    const element = elementInstance as TextAreaFieldCustomInstance;
  
    const [value, setValue] = useState(defaultValue || "");
    const [error, setError] = useState(false);
  
    useEffect(() => {
      setError(isInvalid === true);
    }, [isInvalid]);
  
    const { label, required, placeHolder, helperText, rows } = element.extraAttributes;
    return (
      <div className="flex flex-col gap-2 w-full">
        <Label className={cn(error && "text-red-500")}>
          {label}
          {required && "*"}
        </Label>
        <Textarea
          className={cn(error && "border-red-500")}
          rows={rows}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            if (!submitValue) return;
            const valid = TextAreaFormElement.validate(element, e.target.value);
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
  