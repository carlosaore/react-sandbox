import React from 'react';
import Modal from "react-modal";
import { nanoid } from "nanoid";
import data from "../data";

Modal.setAppElement("#root");

class ModalMolecule extends React.Component {

	constructor() {
		super();
		this.state = {
			showModal: []
		}

	this.handleOpenModal = this.handleOpenModal.bind(this);
	this.handleCloseModal = this.handleCloseModal.bind(this);

	};

	handleOpenModal(index) {
		const newShowModal = this.state.showModal;
		newShowModal[index] = true;
		this.setState({
			showModal: newShowModal
		});
	};

	handleCloseModal() {
		const newShowModal = this.state.showModal.map((element) => false);
		this.setState({
			showModal: newShowModal
		});
	};

	render() {
		return (
			<div>
				{data.map((element, index) => (
					<div key={nanoid()}>
						<button id={index} onClick={(event) => this.handleOpenModal(event.target.id)}>open</button>
						<h3>{element.text}</h3>
						<p>{element.status}</p>
						<Modal
							isOpen={this.state.showModal[index]}
							shouldCloseOnEsc={true}
							onRequestClose={this.handleCloseModal}
						>
							<button onClick={this.handleCloseModal}>✕</button>
							<h3>{element.text}</h3>
							<p>{element.details}</p>
						</Modal>
					</div>
				))}
			</div>
		);
	}

}

export default ModalMolecule;