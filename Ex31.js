class Movie {
    constructor(name, rating, yearRealeased) {

        this.movieName = name;
        this.rating = rating;
        this.yearRealeased = yearRealeased
    }
    printAllAttribute(){
        alert(this.movieName + "rating" + this.rating + "year realeased" + this.yearRealeased);
        return this
    }


}



function main(){


    var title1 = new Movie("Equalizer", 4,2015)
    var title2 = new Movie("Friday", 5, 1997)
alert(title1.printAllAttribute());
    console.log(title2.printAllAttribute())

}

main();
