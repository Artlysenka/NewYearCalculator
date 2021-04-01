// Add your code here

function newYearCalculator() {

  window.onload = function () {
    localStorageCheck()
    getLocalStorage()
  }

  function localStorageCheck() {
    if (localStorage.getItem('kottage1') == null) {
      localStorage.setItem('kottage1', '210.00')
    }
    if (localStorage.getItem('kottage6L') == null) {
      localStorage.setItem('kottage6L', '280.00')
    }
    if (localStorage.getItem('kottage5L') == null) {
      localStorage.setItem('kottage5L', '292.86')
    }
    if (localStorage.getItem('kottage3Z') == null) {
      localStorage.setItem('kottage3Z', '222.00')
    }
    if (localStorage.getItem('kottage4Z') == null) {
      localStorage.setItem('kottage4Z', '286.38')
    }
    if (localStorage.getItem('d2m1k1person') == null) {
      localStorage.setItem('d2m1k1person', '38.62')
    }
    if (localStorage.getItem('d2m1k2person') == null) {
      localStorage.setItem('d2m1k2person', '71.90')
    }
    if (localStorage.getItem('d2m2k1person') == null) {
      localStorage.setItem('d2m2k1person', '71.90')
    }
    if (localStorage.getItem('d2m2k2person') == null) {
      localStorage.setItem('d2m2k2person', '95.24')
    }
    if (localStorage.getItem('d2m2kAdd') == null) {
      localStorage.setItem('d2m2kAdd', '38.57')
    }
    if (localStorage.getItem('d1luks1person') == null) {
      localStorage.setItem('d1luks1person', '85.24')
    }
    if (localStorage.getItem('d1luks2person') == null) {
      localStorage.setItem('d1luks2person', '114.29')
    }
    if (localStorage.getItem('d1luksAdd') == null) {
      localStorage.setItem('d1luksAdd', '42.86')
    }
    if (localStorage.getItem('d2luks1person') == null) {
      localStorage.setItem('d2luks1person', '95.24')
    }
    if (localStorage.getItem('d2luks2person') == null) {
      localStorage.setItem('d2luks2person', '142.86')
    }
    if (localStorage.getItem('d2luksAdd') == null) {
      localStorage.setItem('d2luksAdd', '47.62')
    }
    if (localStorage.getItem('breakfast') == null) {
      localStorage.setItem('breakfast', '7.00')
    }
    if (localStorage.getItem('dinner') == null) {
      localStorage.setItem('dinner', '14.33')
    }
    if (localStorage.getItem('supper') == null) {
      localStorage.setItem('supper', '12.00')
    }
    if (localStorage.getItem('banquetAdult') == null) {
      localStorage.setItem('banquetAdult', '76.19')
    }
    if (localStorage.getItem('banquetChild') == null) {
      localStorage.setItem('banquetChild', '52.38')
    }
    if (localStorage.getItem('entertainDr') == null) {
      localStorage.setItem('entertainDr', '61.43')
    }
    if (localStorage.getItem('entertainLeoshki') == null) {
      localStorage.setItem('entertainLeoshki', '29.52')
    }
    if (localStorage.getItem('entertainZolovo') == null) {
      localStorage.setItem('entertainZolovo', '16.67')
    }
    if (localStorage.getItem('animnationDr') == null) {
      localStorage.setItem('animnationDr', '42.85')
    }
    if (localStorage.getItem('animnationDrChild') == null) {
      localStorage.setItem('animnationDrChild', '23.80')
    }
    if (localStorage.getItem('animationLeoshki') == null) {
      localStorage.setItem('animationLeoshki', '42.85')
    }
    if (localStorage.getItem('animationLeoshkiChild') == null) {
      localStorage.setItem('animationLeoshkiChild', '23.80')
    }

  }
  function getLocalStorage() {
    document.getElementById("lkottage1").value = localStorage.getItem('kottage1')
    document.getElementById("lkottage5").value = localStorage.getItem('kottage5L')
    document.getElementById("lkottage6").value = localStorage.getItem('kottage6L')
    document.getElementById("zkottage3").value = localStorage.getItem('kottage3Z')
    document.getElementById("zkottage4").value = localStorage.getItem('kottage4Z')
    document.getElementById("d2m1k1person").value = localStorage.getItem('d2m1k1person')
    document.getElementById("d2m1k2person").value = localStorage.getItem('d2m1k2person')
    document.getElementById("d2m2k1person").value = localStorage.getItem('d2m2k1person')
    document.getElementById("d2m2k2person").value = localStorage.getItem('d2m2k2person')
    document.getElementById("d2m2kAdd").value = localStorage.getItem('d2m2kAdd')
    document.getElementById("d1luks1person").value = localStorage.getItem('d1luks1person')
    document.getElementById("d1luks2person").value = localStorage.getItem('d1luks2person')
    document.getElementById("d1luksAdd").value = localStorage.getItem('d1luksAdd')
    document.getElementById("d2luks1person").value = localStorage.getItem('d2luks1person')
    document.getElementById("d2luks2person").value = localStorage.getItem('d2luks2person')
    document.getElementById("d2luksAdd").value = localStorage.getItem('d2luksAdd')
    document.getElementById("breakfast").value = localStorage.getItem('breakfast')
    document.getElementById("dinner").value = localStorage.getItem('dinner')
    document.getElementById("supper").value = localStorage.getItem('supper')
    document.getElementById("banquetAdult").value = localStorage.getItem('banquetAdult')
    document.getElementById("banquetChild").value = localStorage.getItem('banquetChild')
    document.getElementById("entertainDr").value = localStorage.getItem('entertainDr')
    document.getElementById("entertainLeoshki").value = localStorage.getItem('entertainLeoshki')
    document.getElementById("entertainZolovo").value = localStorage.getItem('entertainZolovo')
    document.getElementById("animnationDr").value = localStorage.getItem('animnationDr')
    document.getElementById("animnationDrChild").value = localStorage.getItem('animnationDrChild')
    document.getElementById("animationLeoshki").value = localStorage.getItem('animationLeoshki')
    document.getElementById("animationLeoshkiChild").value = localStorage.getItem('animationLeoshkiChild')


  }
  function localStorageSet() {
    localStorage.setItem('kottage1', document.getElementById("lkottage1").value)
    localStorage.setItem('kottage5L', document.getElementById("lkottage5").value)
    localStorage.setItem('kottage6L', document.getElementById("lkottage6").value)
    localStorage.setItem('kottage3Z', document.getElementById("zkottage3").value)
    localStorage.setItem('kottage4Z', document.getElementById("zkottage4").value)
    localStorage.setItem('d2m1k1person', document.getElementById("d2m1k1person").value)
    localStorage.setItem('d2m1k2person', document.getElementById("d2m1k2person").value)
    localStorage.setItem('d2m2k1person', document.getElementById("d2m2k1person").value)
    localStorage.setItem('d2m2k2person', document.getElementById("d2m2k2person").value)
    localStorage.setItem('d2m2kAdd', document.getElementById("d2m2kAdd").value)
    localStorage.setItem('d1luks1person', document.getElementById("d1luks1person").value)
    localStorage.setItem('d1luks2person', document.getElementById("d1luks2person").value)
    localStorage.setItem('d1luksAdd', document.getElementById("d1luksAdd").value)
    localStorage.setItem('d2luks1person', document.getElementById("d2luks1person").value)
    localStorage.setItem('d2luks2person', document.getElementById("d2luks2person").value)
    localStorage.setItem('d2luksAdd', document.getElementById("d2luksAdd").value)
    localStorage.setItem('breakfast', document.getElementById("breakfast").value)
    localStorage.setItem('dinner', document.getElementById("dinner").value)
    localStorage.setItem('supper', document.getElementById("supper").value)
    localStorage.setItem('banquetAdult', document.getElementById("banquetAdult").value)
    localStorage.setItem('banquetChild', document.getElementById("banquetChild").value)
    localStorage.setItem('entertainDr', document.getElementById("entertainDr").value)
    localStorage.setItem('entertainLeoshki', document.getElementById("entertainLeoshki").value)
    localStorage.setItem('entertainZolovo', document.getElementById("entertainZolovo").value)
    localStorage.setItem('animnationDr', document.getElementById("animnationDr").value)
    localStorage.setItem('animnationDrChild', document.getElementById("animnationDrChild").value)
    localStorage.setItem('animationLeoshki', document.getElementById("animationLeoshki").value)
    localStorage.setItem('animationLeoshkiChild', document.getElementById("animationLeoshkiChild").value)

    alert('Для сохранения настроек нажмите "Обновить" или перезагрузите страницу')
    cont.style.display = 'none'
  }


  let prices = {
    kottage1Leoshki: localStorage['kottage1'],
    kottage5Leoshki: localStorage['kottage5L'],
    kottage6Leoshki: localStorage['kottage6L'],
    kottage3Zolovo: localStorage['kottage3Z'],
    kottage4Zolovo: localStorage['kottage4Z'],
    dryviaty2m1k1person: localStorage['d2m1k1person'],
    dryviaty2m1k2person: localStorage['d2m1k2person'],
    dryviaty2m2k1person: localStorage['d2m2k1person'],
    dryviaty2m2k2person: localStorage['d2m2k2person'],
    dryviaty2m2kadditinal: localStorage['d2m2kAdd'],
    dryviaty1luks1person: localStorage['d1luks1person'],
    dryviaty1luks2person: localStorage['d1luks2person'],
    dryviaty1luksadditinoal: localStorage['d1luksAdd'],
    dryviaty2luks1person: localStorage['d2luks1person'],
    dryviaty2luks2person: localStorage['d2luks2person'],
    dryviaty2luksadditinoal: localStorage['d2luksAdd'],
    breakfast: localStorage['breakfast'],
    dinner: localStorage['dinner'],
    supper: localStorage['supper'],
    banquetAdult: localStorage['banquetAdult'],
    banquetChild: localStorage['banquetChild'],
    entertainDr: localStorage['entertainDr'],
    entertainLeoshki: localStorage['entertainLeoshki'],
    entertainZolovo: localStorage['entertainZolovo'],
    animnationDr: localStorage['animnationDr'],
    animnationDrChild: localStorage['animnationDrChild'],
    animationLeoshki: localStorage['animationLeoshki'],
    animationLeoshkiChild: localStorage['animationLeoshkiChild']
  }


  let accomodationPrice
  let preFivePrice
  let precent = 5
  let touristTax
  let discountSize
  let tourPrice
  let guestsAmountPrice
  let guestsAmounttax
  let guestsAmountDiscount




  calculator.oninput = function () {

    if (house.value == '1kottageL') {
      if (parseInt(adult.value) + parseInt(child.value) > 8) {
        accomodationPrice = 2
      }
      else if (parseInt(adult.value) + parseInt(child.value) == 0) {
        accomodationPrice = 0
      }
      else if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
        preFivePrice = parseFloat(prices.kottage1Leoshki)
        touristTax = (preFivePrice / 100) * precent
        accomodationPrice = preFivePrice + touristTax

      }
      else if (parseInt(discount.value) > 0) {
        countDiscount(discount.value, parseFloat(prices.kottage1Leoshki), 0)
      }
      else {
        countDiscount(discountAll.value, parseFloat(prices.kottage1Leoshki), 0)

      }

    }
    else if (house.value == '5kottageL') {
      if (parseInt(adult.value) + parseInt(child.value) > 8) {
        accomodationPrice = 2
      }
      else if (parseInt(adult.value) + parseInt(child.value) == 0) {
        accomodationPrice = 0
      }
      else if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
        preFivePrice = parseFloat(prices.kottage5Leoshki)
        touristTax = (preFivePrice / 100) * precent
        accomodationPrice = preFivePrice + touristTax
      }
      else if (parseInt(discount.value) > 0) {
        countDiscount(discount.value, parseFloat(prices.kottage5Leoshki), 0)
      }
      else {
        countDiscount(discountAll.value, parseFloat(prices.kottage5Leoshki), 0)
      }
    }
    else if (house.value == '6kottageL') {
      if (parseInt(adult.value) + parseInt(child.value) > 14) {
        accomodationPrice = 2
      }
      else if (parseInt(adult.value) + parseInt(child.value) == 0) {
        accomodationPrice = 0
      }
      else if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
        preFivePrice = parseFloat(prices.kottage6Leoshki)
        touristTax = (preFivePrice / 100) * precent
        accomodationPrice = preFivePrice + touristTax
      }
      else if (parseInt(discount.value) > 0) {
        countDiscount(discount.value, parseFloat(prices.kottage6Leoshki), 0)
      }
      else {
        countDiscount(discountAll.value, parseFloat(prices.kottage6Leoshki), 0)
      }
    }
    else if (house.value == '3kottageZ') {
      if (parseInt(adult.value) + parseInt(child.value) > 8) {
        accomodationPrice = 2
      }
      else if (parseInt(adult.value) + parseInt(child.value) == 0) {
        accomodationPrice = 0
      }
      else if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
        preFivePrice = parseFloat(prices.kottage3Zolovo)
        touristTax = (preFivePrice / 100) * precent
        accomodationPrice = preFivePrice + touristTax
      }
      else if (parseInt(discount.value) > 0) {
        countDiscount(discount.value, parseFloat(prices.kottage3Zolovo), 0)
      }
      else {
        countDiscount(discountAll.value, parseFloat(prices.kottage3Zolovo), 0)
      }
    }
    else if (house.value == '4kottageZ') {
      if (parseInt(adult.value) + parseInt(child.value) > 10) {
        accomodationPrice = 2
      }
      else if (parseInt(adult.value) + parseInt(child.value) == 0) {
        accomodationPrice = 0
      }
      else if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
        preFivePrice = parseFloat(prices.kottage4Zolovo)
        touristTax = (preFivePrice / 100) * precent
        accomodationPrice = preFivePrice + touristTax
      }
      else if (parseInt(discount.value) > 0) {
        countDiscount(discount.value, parseFloat(prices.kottage4Zolovo), 0)
      }
      else {
        countDiscount(discountAll.value, parseFloat(prices.kottage4Zolovo), 0)
      }
    }
    else if (house.value == '0') {
      accomodationPrice = 0
    }
    else {
      countDrivyatu(house.value);
    }

    function countDrivyatu(houseType) {
      if (houseType == '2m1k') {
        if (parseInt(adult.value) + parseInt(child.value) == 1) {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            preFivePrice = parseFloat(prices.dryviaty2m1k1person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2m1k1person), 0)
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2m1k1person), 0)
          }
        }
        else if (parseInt(adult.value) + parseInt(child.value) == 0) {
          accomodationPrice = 0
        }
        else if (parseInt(adult.value) + parseInt(child.value) == 2) {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            preFivePrice = parseFloat(prices.dryviaty2m1k2person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2m1k2person), 0)
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2m1k2person), 0)
          }
        }
        else {
          accomodationPrice = 1
        }
      }
      else if (houseType == '2m2k') {
        if (parseInt(adult.value) + parseInt(child.value) == 1) {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            preFivePrice = parseFloat(prices.dryviaty2m2k1person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2m2k1person), 0)
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2m1k1person), 0)
          }
        }
        else if (parseInt(adult.value) + parseInt(child.value) > 4) {
          accomodationPrice = 1
        }
        else if (parseInt(adult.value) + parseInt(child.value) == 0) {
          accomodationPrice = 0
        }
        else {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            let guestsAmount = (parseInt(adult.value) + parseInt(child.value)) - 2
            guestsAmountPrice = parseFloat(prices.dryviaty2m2kadditinal) * guestsAmount
            guestsAmounttax = (guestsAmountPrice / 100) * precent
            preFivePrice = parseFloat(prices.dryviaty2m2k2person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax + guestsAmountPrice + guestsAmounttax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2m2k2person), parseFloat(prices.dryviaty2m2kadditinal))
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2m2k2person), parseFloat(prices.dryviaty2m2kadditinal))
          }
        }
      }
      else if (houseType == '1luks') {
        if (parseInt(adult.value) + parseInt(child.value) == 1) {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            preFivePrice = parseFloat(prices.dryviaty1luks1person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty1luks1person), 0)
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty1luks1person), 0)
          }
        }
        else if (parseInt(adult.value) + parseInt(child.value) == 0) {
          accomodationPrice = 0
        }
        else if (parseInt(adult.value) + parseInt(child.value) > 4) {
          accomodationPrice = 1
        }
        else {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            let guestsAmount = (parseInt(adult.value) + parseInt(child.value)) - 2
            guestsAmountPrice = parseFloat(prices.dryviaty1luksadditinoal) * guestsAmount
            guestsAmounttax = (guestsAmountPrice / 100) * precent
            preFivePrice = parseFloat(prices.dryviaty1luks2person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax + guestsAmountPrice + guestsAmounttax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty1luks2person), parseFloat(prices.dryviaty1luksadditinoal))
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty1luks2person), parseFloat(prices.dryviaty1luksadditinoal))
          }
        }
      }
      else {
        if (parseInt(adult.value) + parseInt(child.value) == 1) {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            preFivePrice = parseFloat(prices.dryviaty2luks1person)
            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2luks1person), 0)
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2luks1person), 0)
          }
        }
        else if (parseInt(adult.value) + parseInt(child.value) == 0) {
          accomodationPrice = 0
        }
        else if (parseInt(adult.value) + parseInt(child.value) > 4) {
          accomodationPrice = 1
        }
        else {
          if (parseInt(discount.value) + parseInt(discountAll.value) == 0) {
            let guestsAmount = (parseInt(adult.value) + parseInt(child.value)) - 2
            guestsAmountPrice = parseFloat(prices.dryviaty2luksadditinoal) * guestsAmount
            guestsAmounttax = (guestsAmountPrice / 100) * precent
            preFivePrice = parseFloat(prices.dryviaty2luks2person)

            touristTax = (preFivePrice / 100) * precent
            accomodationPrice = preFivePrice + touristTax + guestsAmountPrice + guestsAmounttax
          }
          else if (parseInt(discount.value) > 0) {
            countDiscount(discount.value, parseFloat(prices.dryviaty2luks2person), parseFloat(prices.dryviaty2luksadditinoal))
          }
          else {
            countDiscount(discountAll.value, parseFloat(prices.dryviaty2luks2person), parseFloat(prices.dryviaty2luksadditinoal))
          }
        }
      }
    }

    function countDiscount(discount, preFivePrice, preGuestsPrice) {
      let guestsAmount = (parseInt(adult.value) + parseInt(child.value)) - 2
      guestsAmountPrice = preGuestsPrice * guestsAmount
      guestsAmounttax = (guestsAmountPrice / 100) * precent
      guestsAmountDiscount = (guestsAmountPrice + guestsAmounttax) / 100 * discount
      touristTax = (preFivePrice / 100) * precent
      discountSize = (preFivePrice + touristTax) / 100 * discount
      guestsAmountPrice = (guestsAmountPrice + guestsAmounttax) - guestsAmountDiscount
      accomodationPrice = preFivePrice + parseFloat(touristTax) - parseFloat(discountSize) + parseFloat(guestsAmountPrice)
    }

    function foodPrice() {
      let breakDinner = parseFloat(prices.breakfast) + parseFloat(prices.dinner)
      if (house.value.includes('L')) {
        return countFoodPrice(parseFloat(prices.breakfast), parseFloat(prices.dinner), parseFloat(prices.supper), parseFloat(prices.banquetChild), parseFloat(prices.banquetAdult), parseFloat(prices.entertainLeoshki), parseFloat(prices.animationLeoshkiChild), parseFloat(prices.animationLeoshki))
      }
      else if (house.value.includes('Z')) {
        return countFoodPrice(parseFloat(prices.breakfast), parseFloat(prices.dinner), parseFloat(prices.supper), parseFloat(prices.banquetChild), parseFloat(prices.banquetAdult), parseFloat(prices.entertainZolovo), breakDinner, breakDinner)
      }

      else {
        return countFoodPrice(parseFloat(prices.breakfast), parseFloat(prices.dinner), parseFloat(prices.supper), parseFloat(prices.banquetChild), parseFloat(prices.banquetAdult), parseFloat(prices.entertainDr), parseFloat(prices.animnationDrChild), parseFloat(prices.animnationDr))
      }

    }

    function countFoodPrice(breakfast, dinner, supper, childbanquet, adultbanquet, entertainment, januaryFirstChild, januaryFirstAdult) {

      let allChildBanquet
      let allAdultbanquet
      let allEntertainment
      let fullboard
      let allFullboard
      let allDinner
      let allSupper
      let allChildJanuaryFirst
      let allAdultJanuaryFirst
      let finalPrice
      let afterNewYearfullBoard
      let allAfterNewYearfullBoard
      let addBreakfast = document.getElementById('addBreakfast')
      let allAddBreakfast
      let addDinner = document.getElementById('addDinner')
      let allAddDinner
      let adSupper = document.getElementById('addSupper')
      let allAddSupper

      let breakfastTax = (breakfast / 100) * precent
      let dinnerTax = (dinner / 100) * precent
      let supperTax = (supper / 100) * precent
      let childbanquetTax = (childbanquet / 100) * precent
      let adultbanquetTax = (adultbanquet / 100) * precent
      let entertainmentTax = (entertainment / 100) * precent
      let januaryFirstChildTax = (januaryFirstChild / 100) * precent
      let januaryFirstAdultTax = (januaryFirstAdult / 100) * precent


      let breakfastDiscount = (breakfast + breakfastTax) / 100 * discountAll.value
      let supperDiscount = (supper + supperTax) / 100 * discountAll.value
      let dinnerDiscount = (dinner + dinnerTax) / 100 * discountAll.value
      let childbanquetDiscount = (childbanquet + childbanquetTax) / 100 * discountAll.value
      let adultbanquetDiscount = (adultbanquet + adultbanquetTax) / 100 * discountAll.value
      let entertainmentDiscount = (entertainment + entertainmentTax) / 100 * discountAll.value
      let januaryFirstChildDiscount = (januaryFirstChild + januaryFirstChildTax) / 100 * discountAll.value
      let januaryFirstAdultDiscount = (januaryFirstAdult + januaryFirstAdultTax) / 100 * discountAll.value


      fullboard = breakfast + dinner + supper
      fullboardTax = (fullboard / 100) * precent
      fullboardDiscount = (fullboard + fullboardTax) / 100 * discountAll.value
      afterNewYearfullBoard = fullboard
      afterNewYearfullBoardTax = fullboardTax
      afterNewYearfullBoardDiscount = fullboardDiscount

      if (date.value.includes('30')) {
        allChildBanquet = (childbanquet + childbanquetTax - childbanquetDiscount) * child.value
        allAdultbanquet = (adultbanquet + adultbanquetTax - adultbanquetDiscount) * adult.value
        allEntertainment = (entertainment + entertainmentTax - entertainmentDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allFullboard = (fullboard + fullboardTax - fullboardDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allSupper = (supper + supperTax - supperDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allDinner = (dinner + dinnerTax - dinnerDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allAddBreakfast = (breakfast + breakfastTax - breakfastDiscount) * addBreakfast.value
        allAddDinner = (dinner + dinnerTax - dinnerDiscount) * addDinner.value
        allAddSupper = (supper + supperTax - supperDiscount) * adSupper.value
        allChildJanuaryFirst = (januaryFirstChild + januaryFirstChildTax - januaryFirstChildDiscount) * child.value
        allAdultJanuaryFirst = (januaryFirstAdult + januaryFirstAdultTax - januaryFirstAdultDiscount) * adult.value
        finalPrice = parseFloat(allChildBanquet) + parseFloat(allAdultbanquet) + parseFloat(allEntertainment)
          + parseFloat(allFullboard) + parseFloat(allSupper) + parseFloat(allDinner) + parseFloat(allChildJanuaryFirst)
          + parseFloat(allAdultJanuaryFirst) + parseFloat(allAddBreakfast) + parseFloat(allAddDinner) + parseFloat(allAddSupper)
        return finalPrice


      }
      else if (date.value.includes('31')) {
        allChildBanquet = (childbanquet + childbanquetTax - childbanquetDiscount) * child.value
        allAdultbanquet = (adultbanquet + adultbanquetTax - adultbanquetDiscount) * adult.value
        allEntertainment = (entertainment + entertainmentTax - entertainmentDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allFullboard = (fullboard + fullboardTax - fullboardDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allSupper = (supper + supperTax - supperDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allAddBreakfast = (breakfast + breakfastTax - breakfastDiscount) * addBreakfast.value
        allAddDinner = (dinner + dinnerTax - dinnerDiscount) * addDinner.value
        allAddSupper = (supper + supperTax - supperDiscount) * adSupper.value
        allDinner = 0
        allChildJanuaryFirst = (januaryFirstChild + januaryFirstChildTax - januaryFirstChildDiscount) * child.value
        allAdultJanuaryFirst = (januaryFirstAdult + januaryFirstAdultTax - januaryFirstAdultDiscount) * adult.value
        finalPrice = parseFloat(allChildBanquet) + parseFloat(allAdultbanquet) + parseFloat(allEntertainment) + parseFloat(allFullboard) + parseFloat(allSupper) + parseFloat(allDinner) + parseFloat(allChildJanuaryFirst) + parseFloat(allAdultJanuaryFirst) + parseFloat(allAddBreakfast) + parseFloat(allAddDinner) + parseFloat(allAddSupper)

        return finalPrice

      }
      else {
        allChildBanquet = (childbanquet + childbanquetTax - childbanquetDiscount) * child.value
        allAdultbanquet = (adultbanquet + adultbanquetTax - adultbanquetDiscount) * adult.value
        allEntertainment = (entertainment + entertainmentTax - entertainmentDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allFullboard = (fullboard + fullboardTax - fullboardDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allSupper = (supper + supperTax - supperDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allDinner = (dinner + dinnerTax - dinnerDiscount) * (parseInt(child.value) + parseInt(adult.value))
        allAddBreakfast = (breakfast + breakfastTax - breakfastDiscount) * addBreakfast.value
        allAddDinner = (dinner + dinnerTax - dinnerDiscount) * addDinner.value
        allAddSupper = (supper + supperTax - supperDiscount) * adSupper.value
        allChildJanuaryFirst = (januaryFirstChild + januaryFirstChildTax - januaryFirstChildDiscount) * child.value
        allAdultJanuaryFirst = (januaryFirstAdult + januaryFirstAdultTax - januaryFirstAdultDiscount) * adult.value
        allAfterNewYearfullBoard = (afterNewYearfullBoard + afterNewYearfullBoardTax - afterNewYearfullBoardDiscount) * (date.value - 2)
          * (parseInt(child.value) + parseInt(adult.value))
        finalPrice = parseFloat(allChildBanquet) + parseFloat(allAdultbanquet) + parseFloat(allEntertainment) + parseFloat(allFullboard) + parseFloat(allSupper)
          + parseFloat(allChildJanuaryFirst) + parseFloat(allAdultJanuaryFirst) + parseFloat(allAfterNewYearfullBoard) + parseFloat(allAddBreakfast) + parseFloat(allAddDinner) + parseFloat(allAddSupper)

        return finalPrice

      }

    }



    discount.oninput = function () {
      if (discount.value > 0) {
        discountAll.value = 0
      }
    }
    discountAll.oninput = function () {
      if (discountAll.value > 0) {
        discount.value = 0
      }
    }
    tourPrice = (parseInt(date.value) * parseFloat(accomodationPrice) + parseFloat(foodPrice()))


    if (accomodationPrice == 1) {
      display.innerHTML = 'В данном номере не может проживать столько гостей!'
      display.style.color = 'red'
    }
    else if (accomodationPrice == 2) {
      display.innerHTML = 'В данном коттедже не может проживать столько гостей!'
      display.style.color = 'red'
    }
    else if (parseInt(adult.value) + parseInt(child.value) + parseInt(house.value) + parseInt(date.value)
      + parseInt(discount.value) + parseInt(discountAll.value) == 0) {
      display.innerHTML = ''
    }
    else if (house.value == 0) {
      display.innerHTML = '0'
      display.style.color = 'black'
    }
    else if (date.value == 0) {
      display.innerHTML = '0'
      display.style.color = 'black'
    }
    else if (discountAll.value > 0) {
      if (currency.value != 'BYN') {
        display.style.color = 'black'
        calculatorCurrency()
      }
      else {
        display.innerHTML = `Стоимость тура: ${tourPrice.toFixed(2)} BYN (${discountAll.value}% скидка на весь тур)`
        display.style.color = 'black'
        display.style.lineHeight = 1.7 + 'em'
      }

    }
    else if (discount.value > 0) {
      if (currency.value != 'BYN') {
        display.style.color = 'black'
        calculatorCurrency()
      }
      else {
        display.innerHTML = `Стоимость тура: ${tourPrice.toFixed(2)} BYN (${discount.value}% скидка на проживание)`
        display.style.color = 'black'
        display.style.lineHeight = 1.7 + 'em'
      }
    }
    else if (parseInt(tourPrice) < 0) {
      display.innerHTML = 'Сумма тура не может быть отрицательной!'
      display.style.color = 'red'
    }
    else {
      if (currency.value != 'BYN') {
        display.style.color = 'black'
        calculatorCurrency()
      }
      else {
        display.innerHTML = `Стоимость тура: ${tourPrice.toFixed(2)} BYN`
        display.style.color = 'black'
        display.style.lineHeight = 1.7 + 'em'
      }
    }

  }
  function calculatorCurrency() {
    display.innerHTML = `Стоимость тура: ${tourPrice.toFixed(2)} ${currency.value}`
    $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function (data) {
      let BYN = data.Valute.BYN.Previous
      let USD = data.Valute.USD.Previous
      let EUR = data.Valute.EUR.Previous
      let tourPriceCurrencyRUB = tourPrice.toFixed(2) * BYN
      let tourPriceCurrencyUSD = (tourPrice.toFixed(2) * BYN) / USD
      let tourPriceCurrencyEUR = (tourPrice.toFixed(2) * BYN) / EUR
      if (currency.value === 'USD') {
        if (discountAll.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyUSD.toFixed(2)} ${currency.value} (${discountAll.value}% скидка на весь тур)`
        }
        else if (discount.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyUSD.toFixed(2)} ${currency.value} (${discount.value}% скидка на проживание)`
        }
        else {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyUSD.toFixed(2)} ${currency.value}`
        }

      }
      else if (currency.value === 'RUB') {
        if (discountAll.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyRUB.toFixed(2)} ${currency.value} (${discountAll.value}% скидка на весь тур)`
        }
        else if (discount.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyRUB.toFixed(2)} ${currency.value} (${discount.value}% скидка на проживание)`
        }
        else {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyRUB.toFixed(2)} ${currency.value}`
        }
      }
      else {
        if (discountAll.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyEUR.toFixed(2)} ${currency.value} (${discountAll.value}% скидка на весь тур)`
        }
        else if (discount.value > 0) {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyEUR.toFixed(2)} ${currency.value} (${discount.value}% скидка на проживание)`
        }
        else {
          display.innerHTML = `Стоимость тура: ${tourPriceCurrencyEUR.toFixed(2)} ${currency.value}`
        }
      }
    });
  }
  document.onclick = function (event) {
    let target = event.target.closest('#settings')
    if (!target) return
    cont.style.display = 'block'
    event.preventDefault()
  }
  cancel.onclick = function (event) {
    display.innerHTML = ''
  }
  containerTable.onclick = function (event) {
    let target = event.target.closest('#exit')
    if (!target) return
    return localStorageSet()
  }
  exitWithout.onclick = function () {
    cont.style.display = 'none'
    return getLocalStorage()
  }
  return tourPrice
}
newYearCalculator()



