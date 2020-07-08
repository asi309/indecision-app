const square = function (x){
    return x*x;
}

const squareArrow = (x) => x* x;

//console.log(squareArrow(8));

const add = (a,b) => {
    return a+b;
}
console.log(add(55,1));

const user = {
    name: "Asidipta",
    cities: ['Asansol', 'Chennai', 'Durgapur'],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities);
        // const that = this;
        // this.cities.forEach(function(city){
        //     console.log(that.name + ' has lived in ' + city);
        // });
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in "+ city);
        });

        // const cityMessage = this.cities.map((city) => {
        //     return (this.name + ' has lived in '+ city);
        // });
        // return cityMessage;

        return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
};
console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [10, 15, 20],
    multiplyBy: 5,
    result(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.result());