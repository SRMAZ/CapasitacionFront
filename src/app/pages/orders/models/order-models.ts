import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { OrderDetailModel } from "./order-details";

export class OrderModel {
    id:        number;
    docNum:    number;
    docEntry:  number;
    docDate:   Date;
    cardCode:  string;
    cardName:  string;
    docTotal:  number;
    reference: string;
    createdBy: number;
    detail:    OrderDetailModel[];

    constructor(data?: Partial<OrderModel>){
        if(data){
            Object.assign(this,data);
        }else{
            this.detail = [];
        }
    }

}

 