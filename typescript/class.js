// define a class 
// readonly properties
// acessors
// modifiers - private, protected , public 
// static properties 
// abstract classes 
// namespaces 
// Generics 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PvtLtd = /** @class */ (function () {
    function PvtLtd(data, name, noOfDept) {
        if (noOfDept === void 0) { noOfDept = 8; }
        this.name = name;
        this.noOfDept = noOfDept;
        this.name_2 = "krishna";
        this.finance = "finance team ";
        this.hr = "hrdepartment";
        this.operations = "production department";
        this.maintenance = "maintenance deparment";
        console.log("test****************");
        this.name_1 = "test";
        PvtLtd.noOfEmployes = data;
    }
    Object.defineProperty(PvtLtd.prototype, "value", {
        get: function () {
            // this.name_1 = "test";
            this.noOfDept = 10;
            return this.finance;
        },
        set: function (v) {
            this.finance = v;
        },
        enumerable: false,
        configurable: true
    });
    PvtLtd.director = "local Resident";
    return PvtLtd;
}());
PvtLtd.noOfEmployes;
var xyzPvtLtd = new PvtLtd(50, "nbits", 20);
xyzPvtLtd.noOfDept;
xyzPvtLtd.name_1 = 10;
xyzPvtLtd.finance;
xyzPvtLtd.value = "financeDept";
xyzPvtLtd.banking;
xyzPvtLtd.noOfEmployes;
var financeValxyzPvtLtd = xyzPvtLtd.value;
var AbcPvtLtd = /** @class */ (function (_super) {
    __extends(AbcPvtLtd, _super);
    function AbcPvtLtd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbcPvtLtd.prototype.data = function () {
        this.noOfDept;
    };
    return AbcPvtLtd;
}(PvtLtd));
