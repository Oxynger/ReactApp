import React from 'react'; // подключение библиотеки React
import Add from "./components/Add";
import News from './components/News';
import './App.css'; // подключение файла стилей

export default class App extends React.Component {
    state = {
        news: null,
        isLoading: false,
    };

    componentDidMount() {
        fetch('http://localhost:3000/data/newsData.json')
            .then(Response => {
                return Response.json();
            })
            .then(data => {
                console.log(this);
                console.log('my news: ', data);
            })
    }

    handleAddNews = data => {
        const nextNews = [data, ...this.state.news];
        this.setState({ news: nextNews });
    };

    render() {
        const { news, isLoading } = this.state;

        return (
            <React.Fragment>
                <Add onAddNews={ this.handleAddNews } />
                <h3>Новости</h3>
                { isLoading && <p>Загружаю...</p> }
                { Array.isArray(news) && <News data={this.state.news} /> }
            </React.Fragment>
        );
    }
}