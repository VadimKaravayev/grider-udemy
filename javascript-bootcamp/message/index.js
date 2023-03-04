const message = pipe(window.location.hash)((val) => val.replace("#", ""), atob);

if (message) {
  getNode("#message-form").add("hide");
  getNode("#message-show").remove("hide");
  getNode("h1").html(message);
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  getNode("#message-form").add("hide");
  getNode("#link-form").remove("hide");

  pipe(event.target)(
    getFormData,
    getInput("msg"),
    encrypt,
    generateUrl,
    setInputVal("#link-input"),
    selectInput
  );
});
