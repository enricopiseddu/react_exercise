import './AddHouseForm.css'
import React from "react";

class AddHouseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            mq: '',
            baths: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, mq, baths } = this.state;

        if(!title){
            alert('Insert a title')
            return
        }

        this.props.onFormSubmit({ title, mq, baths });

        // Clear form after submission
        this.setState({
            title: '',
            mq: '',
            baths: ''
        });
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} class="add-form">
                    <div class="form-control">
                        <label>Titolo</label>
                        <input type="text" name="title"
                               placeholder="Es. Casa campidanese"
                               onChange={this.handleInputChange}/>
                    </div>

                    <div class="form-control">
                        <label>Superficie</label>
                        <input type="number" name="mq"
                               placeholder="es. 150mq"
                               onChange={this.handleInputChange}/>
                    </div>


                    <div class="form-control">
                        <label>Bagni</label>
                        <input type="number" name="baths"
                               placeholder="es. 3"
                               onChange={this.handleInputChange}/>
                    </div>

                    <input type="submit" value="Salva"
                           class="btn btn-block"/>
                </form>
            </div>
        )
    }
}

export default AddHouseForm;
