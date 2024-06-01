import React from 'react';
import TeamTable from '../components/TeamTable';

import { Header } from "../components/Header";
import { TeamCards } from '../components/TeamCards';

export default function Teams(){
    

    return(
        <>
        <main className=' md:grid md:grid-cols-3 gap-4'>
            <section className="mb-4 col-span-2 flex flex-col gap-4 md:mr-4">
                <Header/>
                <TeamTable/> 
            </section>
            <section>
                <TeamCards/>
            </section>
        </main>
        </>
    )
}