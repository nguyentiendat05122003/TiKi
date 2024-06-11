import React from 'react';
import Child2 from '~/components/TestComponent/child2';
type MyProps = {
    title: string;
    run: (value: number) => void;
};
type MyState = {
    count: number;
    tmp: number;
};
export class Child extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            count: 0,
            tmp: 0,
        };
    }
    static getDerivedStateFromProps(props: MyProps, state: MyState) {
        return () => {
            // if (state.tmp > 3) {
            //     return 'lol';
            // }
            return { tmp: state.tmp };
        };
    }
    increment = (amt: number) => {
        this.setState((state) => ({
            count: state.count + amt,
        }));
    };
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.state.count}</h2>
                <h2>{this.state.tmp}</h2>
                <button onClick={() => this.increment(1)}>Increase</button>
                <Child2 run={this.props.run} />
            </div>
        );
    }
}
