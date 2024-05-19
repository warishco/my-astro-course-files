export const formSubmit = (form: HTMLFormElement) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await fetch(form.action, {
      method: "POST",
      body: null,
    });
  });
};
