import React, {Component} from 'react';
import AllLists from "./components/AllLists/allLists";
import Title from "./components/Title/title";
import SearchPanel from "./components/searchPanel/searchPanel";
import './App.css';

export default class App extends Component {

    state = {
        tasks: [
            {id: 1, title: 'go to the shop', important: false, done: false},
            {id: 2, title: 'go to the gym', important: false, done: false},
            {id: 3, title: 'go to the hotel', important: false, done: false}
        ]
    };

    // function which marks important elements
    importantElement = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task => ({
                ...task,
                important: id === task.id ? !task.important : task.important
            }))
        });
    };

    // function which marks checked elements
    checkedElement = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task => ({
                ...task,
                done: id === task.id ? !task.done : task.done
            }))
        })
    };

    // function which realise input and adding new task into ToDoList
    searchPanel = (text, e) => {
        e.preventDefault();
        this.setState(
            {
                tasks: [...this.state.tasks, {
                    id: Math.random(),
                    title: text,
                    important: false,
                    done: false
                }]
            }
        );
    };


    // function which deleting tasks from our app
    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const idx = tasks.findIndex((el) => el.id === id);
            const before = tasks.slice(0, idx);
            const after = tasks.slice(idx + 1);

            const newTasks = [...before, ...after];
            return {
                tasks: newTasks
            };
        });
    };

    // function which clearing input after adding new task


    render() {

        const activeTasks = this.state.tasks.filter(tasks => !tasks.done);
        const doneTasks = this.state.tasks.filter(tasks => tasks.done);

        return (
            <div className="App">
                <Title tasks={activeTasks.length}
                       importantTasks={this.state.tasks.filter(({important}) => important).length}
                       doneTasks={this.state.tasks.filter(({done}) => done).length}
                />
                <SearchPanel addNewTask={this.searchPanel}

                />
                <AllLists activeTasks={activeTasks}
                          doneTasks={doneTasks}
                          deleteTask={this.deleteTask}
                          check={this.importantElement}
                          checkElement={this.checkedElement}
                />
            </div>
        );
    }
}

