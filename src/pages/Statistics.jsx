import { LeaderBoard } from "../components/LeaderBoard"

export default function Statistics(){

    return(
        <>
        <header className="md:mt-8 ">
            <h2>Statistics Overview</h2>
        </header>
        <main className="flex md:mt-4 space-x-4 ">
            <section className="bg-blue-600 rounded-3xl">
                <LeaderBoard/>
            </section>
            <section className="bg-blue-600 rounded-3xl">
                <div>data cards</div>
                <div>activity hours</div>
            </section>
            <section className="bg-blue-600 rounded-3xl">
                <div>skills in dev</div>
                <div>top skills</div>
            </section>
        </main>
        </>
    )
}