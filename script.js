let boxes = document.querySelectorAll(".box");
let areas = document.querySelectorAll(".area");

let selectedBox = null;

boxes.forEach(box => {

    box.addEventListener("dragstart", function(){
        selectedBox = this;
    });

});

areas.forEach(area => {

    area.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    area.addEventListener("drop", function(){
        if(selectedBox){
            this.appendChild(selectedBox);
            selectedBox = null;
        }
    });

});