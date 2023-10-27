"use client"

import {  UnPublishForm } from '@/actions/form';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { FaSpinner } from 'react-icons/fa';
import { MdOutlinePublish } from 'react-icons/md';

type Props = {}


function UnPublishFormBtn({ id }: { id: number }) {
    const [loading, startTransition] = useTransition();
    const router = useRouter();
  
    async function handleUnPublishForm() {
      try {
        await UnPublishForm(id);
        toast({
          title: "Success",
          description: "Your form has been unpublished",
        });
        router.refresh();
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong",
        });
      }
    }
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400">
            <MdOutlinePublish className="h-4 w-4" />
            UnPublish
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              
              <span className="font-medium">
                By unpublishing this form, it will no longer be available to the public and you will not be able to collect submissions.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                startTransition(handleUnPublishForm);
              }}
            >
              Proceed {loading && <FaSpinner className="animate-spin" />}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  
  export default UnPublishFormBtn;