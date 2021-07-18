import './App.css';
import { Component } from 'react';
import { TaskBox } from './components/taskbox/taskBox.component';


class App extends Component {
    constructor() {
        super();

        this.state = {
            taskBoxes: [
                {id: 1, typeOfTasks: 'To Buy', taskList: ['Apples', 'Milk', 'Coffe']},
                {id: 2, typeOfTasks: 'Friday Tasks', taskList: ['Hummus Take away', 'Clean house']},
                {id: 3, typeOfTasks: 'Check', taskList: ['Yad2 - for New Appartments']},
            ]
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <TaskBox>
                        {
                            this.state.taskBoxes.map(taskBox => (
                                <h1 key={taskBox.id}>{taskBox.typeOfTasks}</h1>
                            ))
                        }
                    </TaskBox>
                </header>
            </div>
        )
    }

}

export default App;
