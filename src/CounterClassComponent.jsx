import React from "react";


class CounterClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState( (prevState) => ({
                    count: prevState.count + 1
        }         
        ))
    }

    decrement = () => {
        this.setState( (prevState) => ({
                    count: prevState.count - 1
        }         
        ))
    }

    render(){
        const {count} = this.state;

        return(

        <div className="heading">
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button type="button" onClick={this.increment}>Increment</button>
            <button type="button" onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}
export default CounterClass