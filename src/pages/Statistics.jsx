import { TopEmployees } from "../components/TopEmployees";
import { ActivityChart } from "../components/ActivityChart";
import { DataCards } from "../components/DataCards";
import { SkillPieCharts } from "../components/SkillPieCharts";
import { TeamLeaderBoard } from "../components/TeamLeaderBoard";
import { Header } from "../components/Header";

export default function Statistics(){

    return(
        <>
        <main className="md:grid md:grid-cols-3 gap-4">
            <div className="mb-4 col-span-2 flex flex-col gap-4 md:mr-4">
                <Header/>
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