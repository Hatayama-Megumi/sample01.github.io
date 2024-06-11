$(document).ready(function() {
  $('#nextButton').click(function() {
    var currentNumber = $('#currentNumber').val();
    if (currentNumber.trim() !== '') {
      var nextNumber = getNextNumber(currentNumber);
      $('#nextNumber').text(nextNumber);
      $('#currentNumber').val(nextNumber);
    }
  });

  function copyCondition() {
    var condition1 = document.getElementById("condition1").value;
    var condition2 = document.getElementById("condition2").value;
    var condition3 = document.getElementById("condition3").value;
    var result = condition1 + "：" + condition2 + "、" + condition3;
    document.getElementById("conditionResult").value = result;
  }
  
  document.getElementById('condition1').addEventListener('change', copyCondition);
  document.getElementById('condition2').addEventListener('change', copyCondition);
  document.getElementById('condition3').addEventListener('change', copyCondition);
  
  
  $('#copyLocationButton01').click(function() {
    var location = $('#location01').val();
    var result = 'JG ' + location;
    $('#locationResult01').val(result);
  });

  $('#copyLocationButton').click(function() {
    var location = $('#location').val();
    var result = 'JG ' + location;
    $('#locationResult').val(result);
  });

  function getNextNumber(currentNumber) {
    var prefix = currentNumber.slice(0, 2);
    var number = parseInt(currentNumber.slice(2)) + 1;
    return prefix + ('0000' + number).slice(-4);
  }
});
