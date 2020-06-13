// this class will have an array of tips, create a new adapater, bind event listeners
class Tips {
    constructor() {
        this.tips = [];
        this.adapter = new TipsAdapter();
        this.bindEventListeners();
        this.fetchAndLoadTips();
    }

    bindEventListeners() {
    this.tipsContainer = document.getElementById("tips-container");
    this.tipsContainer.addEventListener(
      "click",
      this.handleTipClick.bind(this)
    );
    this.tipForm = document.getElementById("new-tip-form");
    this.tipForm.addEventListener("submit", this.createTip.bind(this));
        // this.body = document.querySelector('body')
        // this.body.addEventListener('blur', this.updateTip.bind(this), true)
    }

    // method to create a new tip 
    // look at https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript?rq=1 for grabbing each input field
    createTip(e) {
    e.preventDefault();
        // const id = parseInt(e.target.dataset.id);
    const title = e.target.querySelector("#title").value;
    const content = e.target.querySelector("#content").value;
    const author = e.target.querySelector("#author").value;
    const url = e.target.querySelector("#tip-url").value;

    this.adapter.createTip(title, content, author, url).then((tip) => {
      this.tips.push(new Tip(tip));
      this.tipForm.reset();
      this.renderTips();
    });
    }

    handleTipClick(e){
        if (e.target.className == "button-modal") {
            
            let tipId = parseInt(e.target.dataset.id)
            this.fetchAndRenderEditForm(tipId)
        }        
    }

    fetchAndRenderEditForm(tipId) {
        
        // added debuggers at various points to check on the tipId, tipFormModal and editFormDiv
        fetch(`http://localhost:3000/api/v1/tips/${tipId}`)
            .then(resp => resp.json())
            .then(tip => {
                let newTip = new Tip(tip)
                
                let tipFormModal = newTip.renderEditTipForm()
                // debugger
                // added edit form div with id of "edit-form" in renderTip() function (in Tip.js) under the edit button
                // then queried for that div below
                let editFormDiv = document.getElementById("edit-form")
                
                editFormDiv.innerHTML = tipFormModal // innerHTML updates but does not show tip modal form
                // possible asynchronous issue and pull into separate function
                let editForm = editFormDiv.querySelector('form')
                editForm.addEventListener('submit', e => {
                    // e.target should be the form node 
                    this.editFormData(e.target, tip.id)
                })
            })
    }

    editFormData(form, tipId) {
        console.log('in this function you collect the values of the form inputs', form, tipId);
        // pass form data and id to updateTip()
        this.updateTip(tipId, title, content, author, link)
    }

    updateTip(tipId, title, content, author, link) {
      console.log("here is where you would do you patch fetch to edit tip using the tipId and form data", tipId);
    }

    // the instance of adapter will fetch the tips, which returns a promise and pass in a callback function
    fetchAndLoadTips() {
        this.adapter.getTips()
        .then(tips => {
        // console.log(tips)
           tips.forEach(tip => this.tips.push(new Tip(tip)))
        })
        .then(() => {
            this.renderTips()
        })
    }

    // function to render tips, markup is in tip.js 
    renderTips() {
        this.tipsContainer.innerHTML = this.tips.map(tip => tip.renderTip()).join(""); 
    }

     
}

    // renderTips() {
    //     const tipsContainer = document.getElementById('tips-container');
    //     const tipsFlipCard = document.querySelector("div.flip-card");
    //     const tipsFlipInner = document.querySelector("div.flip-card-inner");
    //     const tipsFlipFront = document.querySelector("div.flip-card-front");
    //     tipsFlipFront.innerHTML = this.tips.map(tip => tip.renderTipFront()).join("");
    //     tipsFlipInner.appendChild(tipsFlipFront);
    //     tipsFlipCard.appendChild(tipsFlipInner);
    //     tipsContainer.appendChild(tipsFlipCard);

    // }

    // updateTip(e) {
    //     console.log(e.target.parentNode)
    //     if (e.target === 'body'){
    //         console.log(this)
    //         // const editTip = e.target;
    //         // editTip.contentEditable = false;
    //         // editTip.focus();
    //         // editTip.classList.remove("editable");
    //     }
    // }
        // if (e.target.className == "button-modal") {
        // const editTip = e.target.parentNode;
        // editTip.contentEditable = true;
        // editTip.focus();
        // editTip.classList.add("editable");
        // }
        // 1. get the id from the button 
        // 2. use id to fetch the single tip
        // 3. received the object from fetch, create new instance of the tip class - to have access to render 
        // 4. look at line 28
        // editTip = parseInt(e.target.dataset.id);
        // console.log(editTip);
        // this.adapter.getTip(editTip)
        //     .then(tip => {
        //         this.tips.push(new Tip(tip))})
        // this.tips.forEach(tip => tip.classlist.add("show-modal"))
        // this.editTip.classlist.add("show-modal");
