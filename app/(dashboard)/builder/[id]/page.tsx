import { GetFormById } from "@/actions/form";
import React from "react";
import FormBuilder from "./_components/FormBuilder";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await GetFormById(Number(id));
  // console.log(form)
  if (!form) {
    throw new Error("form not found");
  }
  return <FormBuilder form={form} />;
}

export default BuilderPage;