import React from 'react';
import { Header } from '../components/Header';
import { EmployeeTable } from '../components/EmployeeTable';
import { EmployeeCards } from '../components/EmployeeCards';

export default function Employees(){
    
    return(
        <>
        <main className=' md:grid md:grid-cols-3 mt-4 gap-4'>
            <section className="mb-4 col-span-2 flex flex-col gap-4 md:mr-4">
                <Header/>
                <EmployeeTable/> 
            </section>
            <section>
                <EmployeeCards/>
            </section>
        </main>
        </>
    )
}