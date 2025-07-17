javascript:(function(){
  const d=document, box=d.createElement("div");
  box.style="margin:10px;border:1px solid #888;padding:8px;max-width:250px;background:#fff";
  box.innerHTML = '<img src=x onerror=alert("XSS in Instagram DM") width="1" height="1">';
  const chat = d.querySelector('[role="textbox"]');
  if (chat && chat.parentElement) {
    chat.parentElement.appendChild(box);
  }
})();