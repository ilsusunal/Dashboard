import { LeaderBoard } from "../components/LeaderBoard";
import { ActivityChart } from "../components/ActivityChart";
import { DataCards } from "../components/DataCards";
import { SkillPieCharts } from "../components/SkillPieCharts";

export default function Statistics(){

    return(
        <>
        <header className="md:mt-8 ">
            <h2>Statistics Overview</h2>
        </header>
        <main className="md:grid md:grid-cols-7 md:mt-4 space-x-4 ">
            <section className="col-span-3 bg-white rounded-3xl p-2">
                <LeaderBoard/>
            </section>
            <section className="col-span-4">
                <div className="p-4">
                    <DataCards/>
                    <ActivityChart/>
                </div>
                <div className="p-4">
                    <SkillPieCharts/>
                </div>   
            </section> 
        </main>
        </>
    )
}