import React, {useState} from 'react';
import { useData } from "../contexts/DataContext";
import { TableView } from "../components/TableView";
import { KanbanView } from "../components/KanbanView";

export default function Courses(){
    const [view, setView] = useState('table');
    return(
        <>
        <header>
            <div>
                <button onClick={() => setView('table')}>Table View</button>
                <button onClick={() => setView('kanban')}>Kanban View</button>
            </div>
        </header>
        <main>
            {view === 'table' ? <TableView /> : <KanbanView />}
        </main>
        </>
    )
}