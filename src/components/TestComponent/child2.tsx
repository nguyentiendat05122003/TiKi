import React, { Component } from 'react';
interface MyProps {
    run: (value: number) => void;
}
export default class Child2 extends Component<MyProps> {
    handleClick = () => {
        this.props.run(10);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}
