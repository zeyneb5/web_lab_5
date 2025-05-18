let cvData = JSON.parse(localStorage.getItem("cvData")) || {
  name: "RICHARD SANCHEZ",
  title: "MARKETING MANAGER",
  profile: "Dynamic and strategic Marketing Manager with over 6 years of experience.",
  contact: ["+123-456-7890", "sanchez@example.com", "123 New Street, New York, USA"],
  education: [
    "2017–2019: MSc Marketing – NYU",
    "2015–2017: BBA Business – State University"
  ],
  skills: ["SEO", "Google Ads", "Leadership"],
  languages: ["English", "Spanish", "French"],
  experience: [
    "Marketing Director – Studio Creative (2022–Present)",
    "Marketing Assistant – Nova Group (2018–2020)"
  ],
  references: [
    "Emilia Davis – CEO at BrightTech",
    "Marco Rivera – Director at StudioPro"
  ]
};

function renderCV() {
  document.getElementById("cv-name").textContent = cvData.name;
  document.getElementById("cv-title").textContent = cvData.title;
  document.getElementById("cv-profile").textContent = cvData.profile;

  // Profil şəkli təyin olunur
  document.getElementById("profile-img").src = "https://i.pinimg.com/736x/bb/aa/22/bbaa22c230379f4fc0a0e3a538c80772.jpg";

  renderList("contact-list", cvData.contact);
  renderList("education-list", cvData.education, "education");
  renderList("skills-list", cvData.skills, "skills");
  renderList("languages-list", cvData.languages);
  renderList("experience-list", cvData.experience, "experience");
  renderList("reference-list", cvData.references);
}

function renderList(id, data, editableType = null) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (editableType) {
      li.onclick = () => editItem(editableType, index);
    }
    ul.appendChild(li);
  });
}

function editItem(type, index) {
  const newValue = prompt("Yeni məlumat:", cvData[type][index]);
  if (newValue) {
    cvData[type][index] = newValue;
    renderCV();
    saveToLocalStorage();
  }
}

function editProfile() {
  const newText = prompt("Profil məlumatını dəyiş:", cvData.profile);
  if (newText) {
    cvData.profile = newText;
    renderCV();
    saveToLocalStorage();
  }
}

function addExperience() {
  const newExp = prompt("Yeni iş təcrübəsi:");
  if (newExp && newExp.length <= 100) {
    cvData.experience.push(newExp);
    renderCV();
    saveToLocalStorage();
  } else {
    alert("Boş və ya çox uzun məlumat daxil edilib!");
  }
}

function addSkill() {
  const newSkill = prompt("Yeni bacarıq:");
  if (newSkill && newSkill.length <= 30) {
    cvData.skills.push(newSkill);
    renderCV();
    saveToLocalStorage();
  } else {
    alert("Boş və ya çox uzun bacarıq daxil edilib!");
  }
}

function addEducation() {
  const newEdu = prompt("Yeni təhsil məlumatı:");
  if (newEdu && newEdu.length <= 100) {
    cvData.education.push(newEdu);
    renderCV();
    saveToLocalStorage();
  } else {
    alert("Boş və ya çox uzun məlumat daxil edilib!");
  }
}

function saveToLocalStorage() {
  localStorage.setItem("cvData", JSON.stringify(cvData));
}

function saveManually() {
  saveToLocalStorage();
  alert("CV məlumatları yadda saxlanıldı!");
}

renderCV();
