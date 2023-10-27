import { GetFormStats } from "@/actions/form";
import StatsCards from "./StatsCards";

export default async function CardStatsWrapper() {
    const stats = await GetFormStats();
    return <StatsCards loading={false} data={stats} />;
  }