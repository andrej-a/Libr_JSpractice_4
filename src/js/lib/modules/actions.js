import $ from "../core";

//1 set/get inner.HTML
$.prototype.html = function(item) {
    for (let i = 0; i < this.length; i++) {
        if (item) {
            this[i].innerHTML = item;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

//2 find element at it index

$.prototype.eq = function(num) {
    const swap = this[num];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};

//3 get index of element

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];
    
    const findMyIndex = (item) => {
        return item === this[0];
    };

    return childs.findIndex(findMyIndex);

};

//4 get element at its class

$.prototype.find = function(selector) {
     let numberOfItems = 0;
     let counter = 0;
     const copyObj = Object.assign({}, this);

     for (let i = 0; i < copyObj.length; i++) {
         const arr = copyObj[i].querySelectorAll(selector);//создаем при каждой итерации
         if (arr.length === 0) {//если ничего не пришло - пропускаем
             continue;
         }

         for (let j = 0; j < arr.length; j++) {//если пришло,то перезаписываем
             this[counter] = arr[j];
             counter++;
         }
         numberOfItems += arr.length;
     }
     this.length = numberOfItems;
     const objLength = Object.keys(this).length;
     for (; numberOfItems < objLength;  numberOfItems++) {
         delete this[numberOfItems];
     }
     return this;
};

//5

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
            this[i] = this[i].closest(selector);
            counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength;  counter++) {
        delete this[counter];
    }

     return this;
};
 
//6

$.prototype.getSiblingAll = function () {
    const parent = this[0].parentElement; //get element`s parent

    if (parent.childElementCount === 1) {//if there aren`t some sibling elements
        return this;
    }
    
    const arr = []; //create empty array
    for (let i = 0; i < parent.childElementCount; i++) {
        if (i !== this.index()) { //i === number of elements and when i !== index of our element continue
            arr.push(parent.children[i]);
        }
    }

    for (let j = 0; j < arr.length; j++) {
        this[j] = arr[j]; //here is object no array
    }
    this.length = arr.length;

    return this;
};