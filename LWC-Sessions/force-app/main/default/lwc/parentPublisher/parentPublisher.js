import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener } from 'c/pubsub';
export default class ChildSubscriber extends LightningElement {
    // js property to display on the UI
    viewMessage;
    @wire(CurrentPageReference) pageRef;
    // Using standard lifecyle hooks to call during the insertion of data on this component
    connectedCallback() {
        // registerListener = (eventName, callback, thisArg)
        registerListener("parentPublisher", this.showDetails, this )
    }
    // create a function to hold data that comes from the subscriber and assign it to our viewMessage
    showDetails(data){
        this.viewMessage=data
    }
}