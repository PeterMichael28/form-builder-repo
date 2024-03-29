import { StatsSingleCard } from "./StatsSingleCard";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { GetFormStats } from "@/actions/form";

interface StatsSingleCardProps {
    data?: Awaited<ReturnType<typeof GetFormStats>>;
    loading: boolean;
}
  
export default function StatsCards(props: StatsSingleCardProps) {
    const { data, loading } = props;
  
    return (
      <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatsSingleCard
          title="Total visits"
          icon={<LuView className="text-blue-600" />}
          helperText="All time form visits"
          value={data?.visits.toLocaleString() || ""}
          loading={loading}
          className="shadow-md shadow-blue-600"
        />
  
        <StatsSingleCard
          title="Total submissions"
          icon={<FaWpforms className="text-yellow-600" />}
          helperText="All time form submissions"
          value={data?.submissions.toLocaleString() || ""}
          loading={loading}
          className="shadow-md shadow-yellow-600"
        />
  
        <StatsSingleCard
          title="Submission rate"
          icon={<HiCursorClick className="text-green-600" />}
          helperText="Visits that result in form submission"
          value={data?.submissionRate.toLocaleString() + "%" || ""}
          loading={loading}
          className="shadow-md shadow-green-600"
        />
  
        <StatsSingleCard
          title="Bounce rate"
          icon={<TbArrowBounce className="text-red-600" />}
          helperText="Visits that leaves without interacting"
          value={data?.submissionRate.toLocaleString() + "%" || ""}
          loading={loading}
          className="shadow-md shadow-red-600"
        />
      </div>
    );
  }