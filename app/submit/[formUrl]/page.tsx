import { GetFormContentByUrl } from "@/actions/form";
import { FormElementInstance } from "@/app/(dashboard)/builder/[id]/_components/FormElements";
import React from "react";
import FormSubmitComponent from "./_components/FormSubmitComponent";

async function SubmitPage({
  params,
}: {
  params: {
    formUrl: string;
  };
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content) as FormElementInstance[];

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} name={form.name} />;
}

export default SubmitPage;