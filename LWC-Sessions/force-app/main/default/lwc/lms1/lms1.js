import { LightningElement, wire } from 'lwc';
// this refers to MessageChannel that we created
import SAMPLEMC from '@salesforce/messageChannel/MessageChannel__c';
// Standard salesfoce libraries
import {MessageContext, publish} from 'lightning/messageService';
export default class Lms1 extends LightningElement {
// creating a property that will hold the user input
    inputValue;
    @wire(MessageContext) context;
    // getting the entered value and assigning to a property
    handleChange(event){
        this.inputValue = event.target.value;
    }
    publishMessage(){
        // lmsData =  <fieldName>lmsData</fieldName>
        const message={
            lmsData:{value:this.inputValue}
        }
        publish(this.context, SAMPLEMC, message)
        //this.context is the context of the current lightning web component with LMS
        //SAMPLEMC is the reference of the Message Channel
        //message is the data to publish
    }
}