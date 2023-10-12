import React from 'react';

import './App.css';
import Header from "./Header";
import House from "./House";
import AddHouseForm from "./AddHouseForm";

class App extends React.Component{

    constructor() {
        super();


        this.state = {
            houses: [{id: 1, title: 'Casa indipendente', mq: 100, baths: 3},
                {id: 2, title: 'Monolocale', mq: 35, baths: 1},
                {id: 3, title: 'Villetta a schiera', mq: 180, baths: 2},
                {id: 4, title: 'Casa in campagna', mq: 350, baths: 4}
            ]
        };
    }

    deleteHouse = (idToDelete) => {
        this.setState(prevState => ({
            houses: prevState.houses.filter((house) => house.id !== idToDelete)
        }));
    }

    addHouse(houseToAdd){
        console.log(houseToAdd)

        const newId = Math.random()*100000; //we generate a random id

        const newHouse = {id: newId,
                          title: houseToAdd.title,
                          mq: houseToAdd.mq,
                          baths: houseToAdd.baths}

        this.setState(prevState => ({
            houses: [...prevState.houses, newHouse]
        }));
    }

    render() {
        return (
            <div className="container">
                <Header/>

                <AddHouseForm onFormSubmit={ (data) => this.addHouse(data)}/>


                <div className=''>
                    {this.state.houses.map((house) => (
                        <House
                            id={house.id}
                            title={house.title}
                            mq={house.mq}
                            baths={house.baths}

                            deleteHouse={() => this.deleteHouse(house.id)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
