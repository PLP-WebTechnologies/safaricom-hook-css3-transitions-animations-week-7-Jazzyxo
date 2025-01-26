// Part 2: JavaScript Functions

// Function to calculate area
function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (!isNaN(length) && !isNaN(width)) {
      const area = length * width;
      document.getElementById('areaResult').textContent = `Area: ${area} square meters`;
    } else {
      document.getElementById('areaResult').textContent = 'Please enter valid numbers for length and width.';
    }
  }
  
  // Function to demonstrate scope
  let globalVariable = "I am a global variable!";
  
  function showScope() {
    let localVariable = "I am a local variable!";
    document.getElementById('scopeResult').textContent = `Global: ${globalVariable}, Local: ${localVariable}`;
  }
  
  // Function to toggle CSS class for animation
  function toggleAnimation() {
    const box = document.getElementById('animationBox');
    box.classList.toggle('hidden');
  }
  
  // Part 3: Combining CSS Animations with JavaScript
  function triggerAnimation() {
    const triggerBox = document.getElementById('triggerBox');
    triggerBox.classList.toggle('animate');
  }
  
  // Event listener for scaling button transition
  document.getElementById('scaleButton').addEventListener('click', function() {
    this.classList.add('scale');
    setTimeout(() => this.classList.remove('scale'), 400); // Reset scale after animation
  });
  
  