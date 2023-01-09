import { LightningElement } from 'lwc';

export default class Lgt extends LightningElement {

    myTitle = "It is the salesforce property";

    connectedCallback(){
        var name = "Tushar Sharma LWC";
        if(this.myTitle){
            window.alert("Title: ");
        }
        window.alert("Remember:"+name);
    }

}