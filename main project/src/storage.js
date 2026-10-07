const storageKey='todo_list';
export function saveTasks(tasks){
    localStorage.setItem(storageKey,JSON.stringify(tasks));
}


export function retriveTask(){
    const saved=localStorage.getItem(storageKey);
    if(!saved)return [];
    try{
        const parsed=JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
    }catch(error){
        
        return [];
    }
}
export function clearAllTasks(){
    localStorage.removeItem(storageKey);
}