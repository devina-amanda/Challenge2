import React from 'react';
import Card from "../Components/Card"
class Konversi extends React.Component{
    constructor(){
        super() // memanggil constructor milik superclass
        this.state = {
            biner: 0,
            option: 10,
            result: 0
        }
    }
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    convertBiner = () => {
        let biner = this.state.biner
        let option = this.state.option

        let hasil = parseInt(biner,2).toString(option)
        this.setState({ result: hasil})
    }
    render(){
        return (
            <div className="container">
                <Card title="Konversi Biner" tipe="info">
                    Biner
                    <input type="number" value={this.state.biner} name="biner" onChange={this.bind} className="form-control" />
                    <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
                        <option value="10">Desimal</option>
                        <option value="8">Octal</option>
                        <option value="16">Hexa</option>
                    </select>
                    <button className="btn btn-primary btn-block" onClick={this.convertBiner}>
                        Convert</button>
                    <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
                </Card>
            </div>
        )
    }
}

export default Konversi 