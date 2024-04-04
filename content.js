let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        let iframes = document.querySelectorAll('iframe');
        Array.from(iframes).forEach((iframe) => {
          if (/^scriptaHR0/.test(iframe.id)) {
            iframe.style.display = 'block';
            console.log("iframe trouvé et modifié:", iframe.id);
            observer.disconnect();
          }
        });
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  