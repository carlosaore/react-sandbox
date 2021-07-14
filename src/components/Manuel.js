import { Component } from 'react'
import textData from '../textData'
import { nanoid } from 'nanoid'
import Modal from 'react-modal';
Modal.setAppElement('#root');

class CarStatusContainer extends Component {

	constructor(){
		super();

		this.state = {
			modalIsOpen: []
		}

		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	openModal(index) {
		console.log("opening", index);
		const newShowModal = this.state.modalIsOpen;
		newShowModal[index] = true;
		this.setState({modalIsOpen: newShowModal});
	}

	closeModal() {
		console.log("closing?");
		console.log(this);
		const newShowModal = [false, false, false, false, false, false];
		this.setState({modalIsOpen: newShowModal});
	}

	componentDidMount() {
		const newShowModal = textData.CarInfo[0].carStatus.map(element => false);
		this.setState({
			modalIsOpen: newShowModal
		});
	}

	render(){
		return (
			<div>
				<h2>Estado general</h2>

				{textData.CarInfo[0].carStatus.map((car, index) => (
					<div
						key={nanoid()}
						className="modal-wrapper"
					>
						<button
							className={`open-modal-button button-status-${car.status}`}
							id={index}
							onClick={(e) => this.openModal(e.target.id)}
						>
							{car.name}
						</button>
						<Modal
							isOpen={this.state.modalIsOpen[index]}
							shouldCloseOnEsc={true}
							onRequestClose={this.closeModal}
							contentLabel={car.name}
						>
							<button onClick={ this.closeModal}>x</button>
							<h2>{car.name}</h2>
							<p>{`Descripción de ${car.name}`}</p>
						</Modal>
					</div>
				))}

			</div>
		)
	}
}
export default CarStatusContainer;



