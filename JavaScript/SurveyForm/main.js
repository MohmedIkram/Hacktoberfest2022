const userDetails = () =>
  localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : [];

const id = (id) => document.getElementById(id);

const form = id("form");
const username = id("name");
const email = id("email");
const password = id("password");
const dob = id("dob");
const tnc = id("accept");

const errorMsg = document.getElementsByClassName("errors");

const today = new Date();
const minDate =
  today.getFullYear() - 55 + "-" + today.getMonth() + "-" + today.getDate();
const maxDate =
  today.getFullYear() - 18 + "-" + today.getMonth() + "-" + today.getDate();
dob.setAttribute("min", minDate);
dob.setAttribute("max", maxDate);

console.log(minDate, maxDate);

const validateForm = () => {
  let formValid = true;
  [username, email, password, dob].forEach((field, index) => {
    if (field.value === "") {
      formValid = false;
      errorMsg[index].innerHTML = `${
        field.getAttribute("name")[0].toUpperCase() +
        field.getAttribute("name").slice(1).toString()
      } is required`;
      field.classList.add("border-red-300");
    } else {
      errorMsg[index].innerHTML = "";
      field.classList.remove("border-red-300");
    }
  });

  /*
   *  Earlier Date-Of-Birth validation
   */

  // if (dob.value) {
  //   const birthday = new Date(dob.value);
  //   const today = new Date();
  //   const age = today.getFullYear() - birthday.getFullYear();
  //   if (age < 18 || age > 55) {
  //     dob.value = null;
  //     formValid = false;
  //     errorMsg[3].innerHTML += "<p>Age must be between 18 - 55 years.<p>";
  //   }
  // }

  if (tnc.checked !== true) {
    formValid = false;
    errorMsg[4].innerHTML = "Terms & Conditions must be accepted.";
  } else errorMsg[4].innerHTML = "";

  return formValid;
};

const deleteDetail = (id) => {
  const userDetailList = userDetails();
  userDetailList.splice(id, 1);

  localStorage.setItem("userDetails", JSON.stringify(userDetailList));
  generateUserDetail();
};
const generateUserDetail = () => {
  const html = userDetails().map((elt, id) => {
    return `<tr>
  <td class="text-light" >${elt.username}</td>
  <td class="text-light" >${elt.email}</td>
  <td class="text-light" >${elt.dob}</td>
  <td class="text-light" >${elt.tnc}</td>
  <td class="text-light" ><i onclick=deleteDetail(${id}) class="fa-solid cursor-pointer fa-trash-can"></i></td></tr>`;
  });

  document.getElementById("userDetails").innerHTML = html.join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.res;
  if (validateForm()) {
    const newuserDetails = {
      username: username.value,
      email: email.value,
      dob: dob.value,
      tnc: tnc.checked,
    };

    localStorage.setItem(
      "userDetails",
      JSON.stringify([...userDetails(), newuserDetails])
    );
    generateUserDetail();
    form.reset();
  }
});

generateUserDetail();
