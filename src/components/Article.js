import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    onCloseModal = () => {
        console.log('CloseModal')
        this.setState({ open: false });
      };
     
    onOpenModal = () => {
        console.log('OpenModal')
        this.setState({ open: true });
    };
     

    render() {
        console.log('render')
        const { open } = this.state;
        console.log(`open=${open}`)

        const {articles} = this.props
        return (
            <article >
                <div onClick={this.onOpenModal}>
                    <h2>{articles.name}</h2>
                    <div>
                        <img src={`images/${articles.img}.jpg`} className="min_image" alt="img"/>
                        <p>{articles.description}</p>
                        <p>{articles.applicability}</p>
                        <h3>{articles.price}</h3>
                    </div>
                </div>
                <Modal open={open}  onClose={this.onCloseModal} center>
                    <div className="modal_body">
                        <h2>Наименование: {articles.name}</h2>
                        <img src={`images/${articles.img}.jpg`} className="full_image" alt="img" />
                        <h3>Артикул: {articles.orig_article}</h3>
                        <p>Описание: {articles.full_description}</p>
                        <p>Применяемость: {articles.applicability}</p>
                        <h3>Цена: {articles.price}</h3>
                    </div>
                </Modal>
            </article>
        );
    }
}

