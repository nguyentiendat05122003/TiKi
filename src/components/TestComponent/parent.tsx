/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Child } from './child';
export class Parent extends React.Component {
    constructor(props: any) {
        super(props);
    }
    run = (value: number) => {
        console.log(value);
    };
    render() {
        return <Child title="Count" run={this.run} />;
    }
}
