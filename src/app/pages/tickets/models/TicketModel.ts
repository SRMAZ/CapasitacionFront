export class TicketModel {
    ticketsId:      number;
    brandId:        string;
    brandName:      string;
    lote:           string;
    isActive:       boolean;
    quantity:       number;
    expirationDate: Date;
    locationId:     number;
    locationName:   string;
    causesId:       number;
    causeName:      string;
    deparmentId:    number;
    departmentName: string;
    comment:        string;
    createBy:       number;
    createUser:     string;
    createDate:     Date;
    modifiedBy:     number;
    modifiedUser:   string;
    modifiedDate:   Date;
}