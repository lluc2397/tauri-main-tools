import AppItemComponent from "./AppItemComponent";
import { BsAlarm } from 'react-icons/bs';
import React from 'react';


export default class BaseAppContentBar extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: [],
            model: props.model,
        }
    }

    getModel() { return new this.state.model }

    getEntries(): void {
        this.getModel().getAll()
            .then((allEntries) => { this.setState({ entries: allEntries }); })
            .catch((error) => {
                console.error(error);
            })
    }

    componentDidMount() {
        this.getEntries()
    }

    render() {
        return (
            <div>
                {this.state.entries.map((value, index) => {
                    return <AppItemComponent title={value.title} url={value.title} icon={<BsAlarm size="15" />} key={index} />
                })}
            </div>
        );
    }
}