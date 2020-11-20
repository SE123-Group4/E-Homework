import React, { Component } from 'react';
import {Input, Card, CardItem, Text} from 'native-base';
export default class FillInBlankQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question:"填空题1",
            answers:"",
        };
    }
    render() {
        return (
            <Card>
                <CardItem header bordered>
                    <Text style={{fontSize:20,color:"black"}}>{this.state.question}</Text>
                </CardItem>
                <CardItem>
                    <Input placeholder='请填写……' />
                </CardItem>
            </Card>
        );
    }
}
