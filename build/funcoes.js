"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//funções
function addNumber(x, y) {
    return x + y;
}
;
function helloWho(name) {
    return `Hello ${name}`;
}
let soma = addNumber(2, 2);
console.log(helloWho("Albérico"));
//funções multi-type
function callToPhone(phone) {
    return phone;
}
;
console.log(callToPhone("1131331111"));
//funções async
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
;
