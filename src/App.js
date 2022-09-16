import React from 'react'
import CommandApi from '././api/api'
import './App.css'
import Log from './components/Log/Log'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            logs: [{title: 'BSD', text:'Lorem,gvuijahvnjahbvcajvnaijuvhnaijkvhnhjavnakvjanvlkavnakjnbvakjvn'}],
            inputValue: ''
        }
    }

    changeInputValue = (ev) => {
        this.setState({
            inputValue : ev.target.value 
        })
    }
    
    submitForm = async (ev) => {
        ev.preventDefault()
        const response = await CommandApi.getCommand(this.state.inputValue)
        if (response) {
            this.setState({
                logs: [...this.state.logs, response.data.log]
            })
        } else {
            alert('Err') // bad response
        }
    }
    render() {
        return <div className='logs__container'>
            <div className='logs'>
            {
                this.state.logs.map((log, index) => <Log key={index} title={log.title} text={log.text}/>)
            }
            </div>
            <form className='logs__form' onSubmit={this.submitForm}>
                <input placeholder='Enter your command' onChange={this.changeInputValue} value={this.state.inputValue} type='text' />
                <button type='submit'>Click</button>
            </form>
        </div>
    }
}   

export default App