import React from 'react';

export function KanbanView(){
    return(
    <>
    <main className='md:flex gap-4'>
      <div className="bg-indigo-50 rounded-3xl p-6 my-4">
        <h3>All</h3>
        <div className="">
            <h3>title</h3>
            <p>ins</p>
            <p>desc</p>
        </div>
    </div>
    <div className="bg-indigo-50 rounded-3xl p-6 my-4">
        <h3>All</h3>
        <div className="">
            <h3>title</h3>
            <p>ins</p>
            <p>desc</p>
        </div>
    </div>
    <div className="bg-indigo-50 rounded-3xl p-6 my-4">
        <h3>All</h3>
        <div className="">
            <h3>title</h3>
            <p>ins</p>
            <p>desc</p>
        </div>
    </div>  
    </main>
    
    </>
    )
}