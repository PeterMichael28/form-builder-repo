
import StatsCards from './_components/StatsCards';
import { Suspense } from 'react';
import CardStatsWrapper from './_components/CardStatsWrapper';
import CreateFormButton from './_components/CreateFormButton';
import { Separator } from "@/components/ui/separator";
import FormCardSkeleton from './_components/FormCardSkeleton';
import FormCards from './_components/FormCards';


export default function Home() {
  return (
    <div className='container pt-4 mx-auto'>

       <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormButton />
        
        <Suspense
          fallback={[1, 2, 3, 4, 5].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  )
}
