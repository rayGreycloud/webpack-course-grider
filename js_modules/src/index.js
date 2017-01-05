const button = document.createElement('button');
button.innerText = 'Click me';

// Note lowercase not React onClick
button.onclick = () => {
  // Built-in method to fetch modules
  // Automatically enables webpack code-splitting
  System.import('./image_viewer')
    .then(module => {
      // Calls code from image_viewer
      module.default();
    });
};

document.body.appendChild(button);
