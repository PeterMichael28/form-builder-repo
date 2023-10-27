"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import React, { useEffect, useState } from "react";

import { ImShare } from "react-icons/im";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
 const [mounted, setMounted] = useState(false);
 const [copied, setCopied] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 useEffect(() => {
  if (!copied) return;

  const timeout = setTimeout(() => setCopied(false), 4000);

  return () => clearTimeout(timeout);
 }, [copied]);

 if (!mounted) {
  return null; // avoiding window not defined error
 }

 const shareLink = `${window.location.origin}/submit/${shareUrl}`;
 return (
  <div className="flex flex-grow gap-4 items-center">
   <Input value={shareLink} readOnly className="truncate" />
   <Button
    className="w-[250px]"
    disabled={copied}
    onClick={() => {
     navigator.clipboard.writeText(shareUrl);
     setCopied(true);
     toast({
      title: "Copied!",
      description: "Link copied to clipboard",
     });
    }}
   >
    <ImShare className="mr-2 h-4 w-4" />
    {copied ? "Copied" : "Copy link"}
   </Button>
  </div>
 );
}

export default FormLinkShare;
