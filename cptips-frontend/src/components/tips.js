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

  handleTipClick(e) {
    if (e.target.className == "button-modal") {
      let tipId = parseInt(e.target.dataset.id);
      this.fetchAndRenderEditForm(tipId);
    }
  }

  fetchAndRenderEditForm(tipId) {
    fetch(`http://localhost:3000/api/v1/tips/${tipId}`)
      .then((resp) => resp.json())
      .then((tip) => {
        let newTip = new Tip(tip);

        let tipFormModal = newTip.renderEditTipForm();
        let editFormDiv = document.querySelector(`.edit-form-${tip.id}`);
        editFormDiv.innerHTML = tipFormModal;
        let editForm = editFormDiv.querySelector("div.modal form");

        editFormDiv.appendChild(editForm);
        editForm.addEventListener("submit", (e) => {
          this.editFormData(e.target, tip.id);
        });
      });
  }

  editFormData(form, tipId) {
    console.log(
      "in this function you collect the values of the form inputs",
      form,
      tipId
    );
    // pass form data and id to updateTip()
    this.updateTip(tipId, title, content, author, link);
  }

  updateTip(tipId, title, content, author, link) {
    console.log(
      "here is where you would do you patch fetch to edit tip using the tipId and form data",
      tipId
    );
  }

  // the instance of adapter will fetch the tips, which returns a promise and pass in a callback function
  fetchAndLoadTips() {
    this.adapter
      .getTips()
      .then((tips) => {
        // console.log(tips)
        tips.forEach((tip) => this.tips.push(new Tip(tip)));
      })
      .then(() => {
        this.renderTips();
      });
  }

  // function to render tips, markup is in tip.js
  renderTips() {
    this.tipsContainer.innerHTML = this.tips
      .map((tip) => tip.renderTip())
      .join("");
  }
}