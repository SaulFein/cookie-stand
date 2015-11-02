// var ten = document.getElementById('10am');
// var eleven = document.getElementById('11am');
// var twelve = document.getElementById('12pm');
// var one = document.getElementById('1pm');
// var two = document.getElementById('2pm');
// var three = document.getElementById('3pm');
// var four = document.getElementById('4pm');
// var five = document.getElementById('5pm');
// var total = document.getElementById('total');

var pikePlace = {
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 17,
  maxCustHr: 88,
  avgCookPerCust: 5.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return this.calcRandHrlyCust() * this.avgCookPerCust;
  },

  getTotalsPerHr: function () {
    for (var i = 0; i < 8; i++) {
      var nextHour = document.createElement('li');
      this.hourlyTotals[i] = this.calcTotalPerHr();
      nextHour.innerHTML = this.times[i] + this.hourlyTotals[i];
      document.getElementById('pikePlaceList').appendChild(nextHour);

    }
    return this.hourlyTotals;
  },

  getDailyTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    document.getElementById('pikePlaceTotal').innerHTML = total;
  },

  displayOnPage: function () {
    // ten.innerHTML = "10am: " + this.hourlyTotals[0];
    // eleven.innerHTML = "11am: " + this.hourlyTotals[1];
    // twelve.innerHTML = "12pm: " + this.hourlyTotals[2];
    // one.innerHTML = "1pm: " + this.hourlyTotals[3];
    // two.innerHTML = "2pm: " + this.hourlyTotals[4];
    // three.innerHTML = "3pm: " + this.hourlyTotals[5];
    // four.innerHTML = "4pm: " + this.hourlyTotals[6];
    // five.innerHTML = "5pm: " + this.hourlyTotals[7];
    // total.innerHTML = "Total: " + this.dailyTotals;
  }
}

renderAll = function () {
  pikePlace.calcRandHrlyCust();
  pikePlace.calcTotalPerHr();
  pikePlace.getTotalsPerHr();
  pikePlace.getDailyTotal();
  pikePlace.displayOnPage();
}

renderAll();
