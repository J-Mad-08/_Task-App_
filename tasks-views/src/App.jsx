import InputTaskBar from './InputTaskBar';
import CurrentTask from './Current-Task';
import CompletedTasks from './Completed-Tasks';
import DueSoonTasks from './Due-Soon-Tasks';
import OverdueTasks from './Overdue-Tasks';

function App() {
	return (
		<div className='App'>
			<h1>Organize yourself</h1>
			<InputTaskBar />
			<h2>Task List</h2>
			<CurrentTask />
			<CompletedTasks />
			<DueSoonTasks />
			<OverdueTasks />
		</div>
	);
}

export default App;
