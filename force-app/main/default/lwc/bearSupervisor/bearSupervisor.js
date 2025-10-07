import { getFieldValue, getRecord } from "lightning/uiRecordApi";
import { LightningElement, api, wire } from "lwc";
import SUPERVISOR_FIELD from "@salesforce/schema/Bear__c.Supervisor__c";

const bearFields = [SUPERVISOR_FIELD];
export default class BearSupervisor extends LightningElement {
  @api recordId;
  @wire(getRecord, { recordId: "$recordId", fields: bearFields }) bear;

  get supervisorId() {
    return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
  }
}
