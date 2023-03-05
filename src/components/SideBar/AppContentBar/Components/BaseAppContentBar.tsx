import AppItemComponent from "./AppItemComponent";
import { BsAlarm } from 'react-icons/bs';
import React from 'react';
import ItemsManager from "../../../../managers/ItemsManager";
import { posts } from "../../../../constants/testConstants";

export default class BaseAppContentBar extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            entries: [],
            model: props.model,
        }
    }

    getModelName(): String {
        return this.getModel().getModelName()
    }

    componentDidMount() {
        this.getEntries()
    }

    getEntries(): void {
        // Check that the items stored are the ones from the current app
        // const entries = ItemsManager.getItems();
        // if (entries.length === 0) {
        // this.getEntriesFromDB()
        // } else {
        // this.setState({ entries: entries });
        // }
        this.getEntriesFromDB()
    }

    getEntriesFromDB(): void {
        this.getModel().getAll()
            .then((entries: Array<any>) => { this.saveEntries(entries) })
            .catch((error: any) => {
                // console.error(error);
                this.saveEntries(posts);
            })
    }

    getModel() { return new this.state.model }

    saveEntries(entries: Array<any>) {
        console.log(entries);
        ItemsManager.saveAllItems(entries);
        this.setState({ entries: entries });
    }

    render() {
        return (
            <div>
                {this.state.entries.map((value, index) => {
                    return <AppItemComponent title={value.title} url={`/${this.getModelName()}/${value.id}`} icon={<BsAlarm size="15" />} key={index} />
                })}
            </div>
        );
    }
}
