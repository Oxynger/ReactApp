import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component {
    state = {
        name: "",
        text: "",
        bigText: "",
        agree: false
    };
    onBtnClickHandler = e => {
        e.preventDefault();
        const { name, text, bigText } = this.state;
        this.props.onAddNews({
            id: +new Date(),
            author: name,
            text,
            bigText
        });
    };
    handleChange = e => {
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    };
    handleCheckboxChange = e => {
        this.setState({ agree: e.currentTarget.checked });
    };
    validate = () => {
        const { name, text, agree, bigText } = this.state;
        return (name.trim() && text.trim() && bigText.trim() && agree);
    };
    render() {
        const { name, text, bigText } = this.state;
        return (
            <form className="add">
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className="add__author"
                    placeholder="Ваше имя"
                    value={name}
                />
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости"
                    value={text}
                />
                <textarea
                    id="bigText"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст новости подробно"
                    value={bigText}
                />
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheckboxChange} /> Я
                    согласен с правилами
        </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Показать alert
        </button>
            </form>
        );
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
};