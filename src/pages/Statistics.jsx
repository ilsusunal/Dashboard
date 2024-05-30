import { LeaderBoard } from "../components/LeaderBoard";
import { ActivityChart } from "../components/ActivityChart";
import { DataCards } from "../components/DataCards";

export default function Statistics(){

    return(
        <>
        <header className="md:mt-8 ">
            <h2>Statistics Overview</h2>
        </header>
        <main className="flex md:mt-4 space-x-4 ">
            <section className="bg-white rounded-3xl flex-1 p-2">
                <LeaderBoard/>
            </section>
            <section className="flex-1 p-4">
                <DataCards/>
                <ActivityChart/>
            </section>
            <section className="bg-white rounded-3xl flex-1 p-4">
                <div>skills in dev</div>
                <div>top skills</div>
            </section>
        </main>
        </>
    )
}