let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        let iframes = document.querySelectorAll('iframe');
        Array.from(iframes).forEach((iframe) => {
          if (/^scriptaHR0/.test(iframe.id)) {
            console.log("iframe trouvé:", iframe);
            setTimeout(() => {
              // send command to this iframe
              console.log("start moving player");
              iframe.contentWindow.postMessage({
                type: "onPlayerMove",
                body: {text: "WA.player.moveTo(100,100)"},
              }, "*");
              console.log("message sent")
              
            }, 3000);
            
            observer.disconnect();
            
            
          }
        });
      }
    });
  });
  
  window.addEventListener("message", function(event) {
    console.log("message received", event.data);
  });
  
  observer.observe(document.body, {
  childList: true,
  subtree: true
});

  