import { GetFormById } from "@/actions/form";

import React from "react";
import { LuView } from "react-icons/lu";
import { FaEdit, FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

import { StatsSingleCard } from "../../_components/StatsSingleCard";
import SubmissionsTable from "./_components/SubmissionsTable";
import FormLinkShare from "./_components/FormLinkShare";
import VisitBtn from "./_components/VisitBtn";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function FormDetailPage({
 params,
}: {
 params: {
  id: string;
 };
}) {
 const { id } = params;
 const form = await GetFormById(Number(id));
 if (!form) {
  throw new Error("form not found");
 }

 const { visits, submissions } = form;

 let submissionRate = 0;

 if (visits > 0) {
  submissionRate = (submissions / visits) * 100;
 }

 const bounceRate = 100 - submissionRate;

 return (
  <>
   <div className="py-10 border-b border-muted">
    <div className="flex gap-3 flex-col lg:flex-row items-center lg:justify-between container">
     <h1 className="text-2xl lg:text-4xl font-bold truncate">
      {form.name}
     </h1>
     <div className="flex justify-center items-center gap-3 flex-col lg:flex-row">
      <Button
       asChild
       variant={"secondary"}
       className="w-full mt-2 text-md gap-4"
      >
       <Link href={`/builder/${form.id}`}>
        Edit form <FaEdit />
       </Link>
      </Button>
      <VisitBtn shareUrl={form.shareURL} />
     </div>
    </div>
   </div>
   <div className="py-4 border-b border-muted">
    <div className="container flex gap-2 items-center justify-between">
     <FormLinkShare shareUrl={form.shareURL} />
    </div>
   </div>
   <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
    <StatsSingleCard
     title="Total visits"
     icon={<LuView className="text-blue-600" />}
     helperText="All time form visits"
     value={visits.toLocaleString() || ""}
     loading={false}
     className="shadow-md shadow-blue-600"
    />

    <StatsSingleCard
     title="Total submissions"
     icon={<FaWpforms className="text-yellow-600" />}
     helperText="All time form submissions"
     value={submissions.toLocaleString() || ""}
     loading={false}
     className="shadow-md shadow-yellow-600"
    />

    <StatsSingleCard
     title="Submission rate"
     icon={<HiCursorClick className="text-green-600" />}
     helperText="Visits that result in form submission"
     value={submissionRate.toLocaleString() + "%" || ""}
     loading={false}
     className="shadow-md shadow-green-600"
    />

    <StatsSingleCard
     title="Bounce rate"
     icon={<TbArrowBounce className="text-red-600" />}
     helperText="Visits that leaves without interacting"
     value={bounceRate.toLocaleString() + "%" || ""}
     loading={false}
     className="shadow-md shadow-red-600"
    />
   </div>

   <div className="container pt-10">
    <SubmissionsTable id={form.id} />
   </div>
  </>
 );
}

export default FormDetailPage;
