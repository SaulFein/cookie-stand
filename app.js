var pikePlace = {
  storeLocation: "Pike Place Market",
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 17,
  maxCustHr: 88,
  avgCookPerCust: 5.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
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
    document.getElementById('pikePlaceTotal').innerHTML = 'Total: ' + total;
  },

  renderAll: function () {
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.getDailyTotal();
  }
}

var seaTac = {
  storeLocation: "Sea Tac Airport",
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 6,
  maxCustHr: 44,
  avgCookPerCust: 1.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
  },

  getTotalsPerHr: function () {
    for (var i = 0; i < 8; i++) {
      var nextHour = document.createElement('li');
      this.hourlyTotals[i] = this.calcTotalPerHr();
      nextHour.innerHTML = this.times[i] + this.hourlyTotals[i];
      document.getElementById('seaTacList').appendChild(nextHour);
    }
    return this.hourlyTotals;
  },

  getDailyTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    document.getElementById('seaTacTotal').innerHTML = 'Total: ' + total;
  },

  renderAll: function () {
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.getDailyTotal();
  }
}

var southCenter = {
  storeLocation: "South Center Mall",
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 6,
  maxCustHr: 44,
  avgCookPerCust: 1.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
  },

  getTotalsPerHr: function () {
    for (var i = 0; i < 8; i++) {
      var nextHour = document.createElement('li');
      this.hourlyTotals[i] = this.calcTotalPerHr();
      nextHour.innerHTML = this.times[i] + this.hourlyTotals[i];
      document.getElementById('southCenterList').appendChild(nextHour);
    }
    return this.hourlyTotals;
  },

  getDailyTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    document.getElementById('southCenterTotal').innerHTML = 'Total: ' + total;
  },

  renderAll: function () {
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.getDailyTotal();
  }
}

var bellevueSquare = {
  storeLocation: "Bellevue Square Mall",
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 6,
  maxCustHr: 44,
  avgCookPerCust: 1.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
  },

  getTotalsPerHr: function () {
    for (var i = 0; i < 8; i++) {
      var nextHour = document.createElement('li');
      this.hourlyTotals[i] = this.calcTotalPerHr();
      nextHour.innerHTML = this.times[i] + this.hourlyTotals[i];
      document.getElementById('bellevueSquareList').appendChild(nextHour);
    }
    return this.hourlyTotals;
  },

  getDailyTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    document.getElementById('bellevueSquareTotal').innerHTML = 'Total: ' + total;
  },

  renderAll: function () {
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.getDailyTotal();
  }
}

var alki = {
  storeLocation: "Alki Beach",
  times: ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '],
  minCustHr: 6,
  maxCustHr: 44,
  avgCookPerCust: 1.2,
  hourlyTotals: [],
  calcRandHrlyCust: function () {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1) + this.minCustHr);
  },

  calcTotalPerHr: function () {
    return Math.ceil(this.calcRandHrlyCust() * this.avgCookPerCust);
  },

  getTotalsPerHr: function () {
    for (var i = 0; i < 8; i++) {
      var nextHour = document.createElement('li');
      this.hourlyTotals[i] = this.calcTotalPerHr();
      nextHour.innerHTML = this.times[i] + this.hourlyTotals[i];
      document.getElementById('alkiList').appendChild(nextHour);
    }
    return this.hourlyTotals;
  },

  getDailyTotal: function() {
    var total = 0;
    for (var i = 0; i < this.hourlyTotals.length; i++) {
      total += this.hourlyTotals[i];
    }
    document.getElementById('alkiTotal').innerHTML = 'Total: ' + total;
  },

  renderAll: function () {
    this.calcRandHrlyCust();
    this.calcTotalPerHr();
    this.getTotalsPerHr();
    this.getDailyTotal();
  }
}
pikePlace.renderAll();
seaTac.renderAll();
southCenter.renderAll();
bellevueSquare.renderAll();
alki.renderAll();
