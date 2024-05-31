import { TopEmployees } from "../components/TopEmployees";
import { ActivityChart } from "../components/ActivityChart";
import { DataCards } from "../components/DataCards";
import { SkillPieCharts } from "../components/SkillPieCharts";
import { TeamLeaderBoard } from "../components/TeamLeaderBoard";

export default function Statistics(){

    return(
        <>
        <main className="grid grid-cols-3 mt-4 gap-4">
            <div className="col-span-2 flex flex-col gap-4">
                <DataCards/>
                <ActivityChart/>
                <TeamLeaderBoard/>
            </div>
            <div>
                <TopEmployees/>
                <SkillPieCharts/>
            </div>
        </main>
        </>
    )
}