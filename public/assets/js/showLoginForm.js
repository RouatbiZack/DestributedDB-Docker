function showLoginForm() {
    // Create the login form element
    const loginForm = document.createElement('form');
    loginForm.classList.add('login-form');
    loginForm.setAttribute('action', '/login');
    loginForm.setAttribute('method', 'POST');
  
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
      loginForm.style.display = 'none';
    });
    loginForm.appendChild(closeButton);
  
    
  
    const heading = document.createElement('h2');
    heading.textContent = 'Login Form';
    loginForm.appendChild(heading);
  
    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'username');
    input1.setAttribute('name', 'username');
    input1.setAttribute('placeholder','Your Username');
    loginForm.appendChild(input1);
  
    const br1 = document.createElement('br');
    loginForm.appendChild(br1);
  
  
  
    const input2 = document.createElement('input');
    input2.setAttribute('type', 'password');
    input2.setAttribute('id', 'password');
    input2.setAttribute('name', 'password');
    input2.setAttribute('placeholder','Your password');
    loginForm.appendChild(input2);
  
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.classList.add('button');
    submitBtn.textContent = 'Login';
    loginForm.appendChild(submitBtn);
  
    const registerLink = document.createElement('a');
    registerLink.setAttribute('href', 'register.html');
    registerLink.textContent = 'Register';
    loginForm.appendChild(registerLink);
  
    // Append the login form element to the body
    document.body.appendChild(loginForm);
  
    // Position the login form element in the middle of the screen
    const loginFormWidth = loginForm.offsetWidth;
    const loginFormHeight = loginForm.offsetHeight;
    loginForm.style.position = 'fixed';
    loginForm.style.top = '50%';
    loginForm.style.left = '50%';
    loginForm.style.transform = `translate(-${loginFormWidth / 2}px, -${loginFormHeight / 2}px)`;
  
    // Show the login form element
    loginForm.style.display = 'block';
  }