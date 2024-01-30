let panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
  panel.id = "content" + (index + 1);
  let nextPanel = panel.nextElementSibling;

  if (nextPanel && nextPanel.classList.contains("panel")) {
    nextPanel.id = "content" + (index + 2);
  }
});


let accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        let panel = accordion.nextElementSibling;

        accordions.forEach((otherAccordion) => {
            if (otherAccordion !== accordion) {
                let otherPanel = otherAccordion.nextElementSibling;
                otherPanel.classList.remove("open");
                otherPanel.style.maxHeight = null;
                otherAccordion.classList.remove("open");
            }
        });

        if (!panel.classList.contains("open")) {
            panel.classList.add("open");
            panel.style.maxHeight = panel.scrollHeight + 'px';
            accordion.classList.add("open"); 
        } else {
            panel.classList.remove("open");
            panel.style.maxHeight = null;
            accordion.classList.remove("open");
        }
    });
});

