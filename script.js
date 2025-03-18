
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
      var result = condition1 + "" + condition2 + "、" + condition3;
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
  
    document.querySelectorAll('.copyButton').forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the location input value
            const location = document.getElementById('location').value;
            
            // Prepare the result with "JG" + location
            const result = 'JG ' + location + ' ' + this.textContent;
    
            // Copy the result to the clipboard
            const textarea = document.createElement('textarea');
            textarea.value = result;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Optional: Set the copied result to a display field (locationResult)
            document.getElementById('locationResult').value = result;
            
            // Show feedback message (optional)
            const feedback = document.createElement('span');
            feedback.innerText = 'コピーしました';
            feedback.style.position = 'absolute';
            feedback.style.backgroundColor = '#333';
            feedback.style.color = '#fff';
            feedback.style.padding = '5px';
            feedback.style.borderRadius = '5px';
            feedback.style.opacity = '0';
            feedback.style.transition = 'opacity 0.5s';
            document.body.appendChild(feedback);
    
            setTimeout(function() {
                feedback.style.opacity = '1';
            }, 100);
    
            setTimeout(function() {
                feedback.style.opacity = '0';
                setTimeout(function() {
                    feedback.remove();
                }, 500);
            }, 2000);
        });
    });
    
  
    function getNextNumber(currentNumber) {
      var prefix = currentNumber.slice(0, 2);
      var number = parseInt(currentNumber.slice(2)) + 1;
      return prefix + ('0000' + number).slice(-4);
    }
  });

  
  document.querySelectorAll('[data-copy]').forEach(function(element) {
    element.addEventListener('click', function() {
        const textToCopy = this.textContent.trim(); // Only the text content of the element
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
  
        const feedback = document.createElement('span');
        feedback.innerText = 'コピーしました';
        feedback.style.position = 'absolute';
        feedback.style.backgroundColor = '#333';
        feedback.style.color = '#fff';
        feedback.style.padding = '5px';
        feedback.style.borderRadius = '5px';
        feedback.style.opacity = '0';
        feedback.style.transition = 'opacity 0.5s';
        this.appendChild(feedback);
        
        setTimeout(function() {
            feedback.style.opacity = '1';
        }, 100);
  
        setTimeout(function() {
            feedback.style.opacity = '0';
            setTimeout(function() {
                feedback.remove();
            }, 500);
        }, 2000);
    });
});



  
