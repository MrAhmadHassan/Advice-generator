import React from 'react';
import axios from 'axios'
import './app.css';
class App extends React.Component{
    state = {
        advice:""
    }

    componentDidMount(){
        this.fetchadvice();
    }

    fetchadvice = ()=>{
        axios.get("https://api.adviceslip.com/advice")
            .then((response)=>{
                const advice = response.data.slip.advice;
                this.setState({advice:advice})
            })
            .catch((error)=>{
                console.log(error)
            })
    }


    render(){
        return (
            <div className='image-container'>
            <button className='advice-button' onClick={this.fetchadvice}>Give me advice!</button>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='text'>{this.state.advice}</h1>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App;