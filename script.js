// script.js
$(document).ready(function() {
    $('#nextButton').click(function() {
      var currentNumber = $('#currentNumber').val();
      if (currentNumber.trim() !== '') {
        var nextNumber = getNextNumber(currentNumber);
        $('#nextNumber').text(nextNumber);
        $('#currentNumber').val(nextNumber);
      }
    });
  });
  
  function getNextNumber(currentNumber) {
    var prefix = currentNumber.match(/[a-zA-Z]+/);
    var number = parseInt(currentNumber.match(/\d+/));
    var nextNumber = prefix[0] + (number + 1);
    return nextNumber;
  }
  
  function copyCondition() {
    var condition1 = document.getElementById("condition1").value;
    var condition2 = document.getElementById("condition2").value;
    var condition3 = document.getElementById("condition3").value;
    var result = condition1 + "：" + condition2 + "、" + condition3;
    document.getElementById("conditionResult").value = result;
  }
  
  function copyLocation() {
    var location = document.getElementById("location").value;
    var result = "JG " + location;
    document.getElementById("locationResult").value = result;
  }
  