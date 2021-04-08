import React from 'react';
import { Input } from 'element-react';
import axios from 'axios';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        axios.get('http://www.randomtext.me/api/lorem').then((response) => {
            this.setState({
                value: JSON.stringify(response.data, null, 2),
            });
        });


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="Home">
                <h1>Mindsay Frontend Technical Test</h1>
                Welcome to Mindsay Frontend Technical Test!

                The primary goal of this test is to assess your ability to write clean and reusable code, and your capacity to implement a user-friendly interface.

                <h2> Introduction</h2>
                This is a live programming exercise. Therefore, we encourage you to ask questions and communicate with the interviewer(s).

                <h2> Brief</h2>
                The objective is to implement a chatbot interface. It should have the following behavior:
                <ul>
                    <li>The bot welcomes the user with a message</li>
                    <li>The user sends a message to the bot</li>
                    <li>The bot answers back with a message</li>
                </ul>

                <h2> Data</h2>
                You should use an existing API for the bot messages. For the purpose of this exercise, you can use the following API has endpoints to receive and create <a href="http://www.randomtext.me/" target="_blank" rel="noreferrer">Random text API</a>
                <Input
                    className="input"
                    type="textarea"
                    value={this.state.value}
                    resize="none"
                    rows={10}
                    onChange={this.handleChange}
                />
                <h2>Tech</h2>

                At Mindsay, our whole frontend stack is in Vue.js. But we want you to be technically comfortable, so this repo is to propose a solution that uses React. The project was created using the standard tool <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noreferrer">create-react-app</a>.

                <br/><br/>
                You are also free to use a components library to get you started, and any other packages that you find useful.
                Our design system is based on <a href="https://elemefe.github.io/" target="_blank" rel="noreferrer">Element-UI</a>. If you want to use this library, know that it has already been installed you can import the atoms you want by adding them in index.js.
                <pre>
                import {'{'} Button {'}'} from 'element-react';
                </pre>

                <h2> Screens</h2>
                At Mindsay, developers and designers use Figma to collaborate. The chatbot design is available <a href="https://www.figma.com/file/9RXfJqDCRnyiitJaF3XxW8/Frontend?node-id=893%3A1873&viewport=846%2C571%2C1" target="_blank" rel="noreferrer">here</a>.

                <iframe className="figma" height="800" src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9RXfJqDCRnyiitJaF3XxW8%2FFrontend%3Fnode-id%3D902%253A1192'} allowFullscreen></iframe>
                <h2> The deliverable</h2>
                <ul>
                    <li>This same project folder with you succed to do during this interview</li>
                    <li>A working chatbot that matches the design as close as possible.</li>
                </ul>
                Tests, code typing and accessibility are not required for this exercise.
            </div>
        );
    }
}
