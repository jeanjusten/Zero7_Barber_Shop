//---------------------------------------------------------------------------------------//
// #region NAVBAR ACTIVE CLASS TOGGLE --------//
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll("#navbar-links .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Adiciona a classe 'active' ao link clicado
            this.classList.add("active");
        });
    });
});

// #endregion ---------------------------------------------------------------------------------------//



//---------------------------------------------------------------------------------------//
// #region PLAN AND SERVICES VALUES --------//
// Easy access to Plans' cost
const blackPlanValue = "130,00"
const goldPlanValue = "220,00"
const primePlanValue = "180,00"

const hairCutCost = "40,00" 
const beardCutCost = "40,00"
const workshopCost = "1997,00*"

// Get all plan and services buttons
const blackPlanSm = document.getElementById("plan-value-black-sm");
const blackPlan = document.getElementById("plan-value-black");
const goldPlanSm = document.getElementById("plan-value-gold-sm");
const goldPlan = document.getElementById("plan-value-gold");
const primePlanSm = document.getElementById("plan-value-prime-sm");
const primePlan = document.getElementById("plan-value-prime");

const hairValueHtml = document.getElementById("cost-haircut");
const beardValueHtml = document.getElementById("cost-beard");
const workshopValueHtml = document.getElementById("cost-workshop");

// Function to edit the desired plan value
function editPlanValue(plan, planValue) {
    plan.textContent = planValue;
}

editPlanValue(hairValueHtml, hairCutCost);
editPlanValue(beardValueHtml, beardCutCost);
editPlanValue(workshopValueHtml, workshopCost);

editPlanValue(blackPlanSm, blackPlanValue);
editPlanValue(blackPlan, blackPlanValue);
editPlanValue(goldPlanSm, goldPlanValue);
editPlanValue(goldPlan, goldPlanValue);
editPlanValue(primePlanSm, primePlanValue);
editPlanValue(primePlan, primePlanValue);

// #endregion ---------------------------------------------------------------------------------------//



//---------------------------------------------------------------------------------------//
// #region WHATSAPP NUMBER API --------//
const whatsappZ7 = "(42) 8848-5454";
function whatsappAPI(buttonId, customMessage = "") {
    document.getElementById(buttonId).href = `https://wa.me/${whatsappZ7.replace(/\D/g, "")}${customMessage}`;
};

// Custom messages depending on the plan Clicked
const planoBlack = "Black.";
const planoGold = "Gold.";
const planoPrime = "Prime.";

const customMsgHair = `?&text=Olá.%20Gostaria%20de%20agendar%20um%20horário%20para%20cortar%20o%20cabelo.`;
const customMsgBeard = `?&text=Olá.%20Gostaria%20de%20agendar%20um%20horário%20para%20cortar%20a%20barba.`;
const customMsgWorkshop = `?&text=Olá.%20Gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Barbeiro.`;

const customMsgBlack = `?&text=Olá.%20Tenho%20interesse%20no%20plano%20${planoBlack}`;
const customMsgGold = `?&text=Olá.%20Tenho%20interesse%20no%20plano%20${planoGold}`;
const customMsgPrime = `?&text=Olá.%20Tenho%20interesse%20no%20plano%20${planoPrime}`;
const customMsgContact = `?&text=Olá.%20Gostaria%20de%20agendar%20um%20horário.`;



// Apply the custom API call to DOM
// Home Page contact button
//whatsappAPI("btn-schedule", customMsgContact);
// Hair cut Button
whatsappAPI("btn-haircut", customMsgHair);
// Beard cut Button
whatsappAPI("btn-beard", customMsgBeard);
// Black Plan contact Button
whatsappAPI("btn-plano-black-sm", customMsgBlack);
whatsappAPI("btn-plano-black", customMsgBlack);
// Gold Plan contact Button
whatsappAPI("btn-plano-gold-sm", customMsgGold);
whatsappAPI("btn-plano-gold", customMsgGold);
// Prime Plan contact Button
whatsappAPI("btn-plano-prime-sm", customMsgPrime);
whatsappAPI("btn-plano-prime", customMsgPrime);
// Workshop Button
whatsappAPI("btn-workshop", customMsgWorkshop);
// Footer Whatsapp contact icon, with no custom message
whatsappAPI("contact-whatsapp");

// #endregion ---------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------//
// #region TEAM MEMBERS DATABASE --------//
// Class person
class Barbeiro {
    constructor(name, instagram, facebook, whats, description, image) {
        this.name = name;
        this.instagram = instagram;
        this.facebook = facebook;
        this.whats = whats;
        this.desc = description;
        this.img = image;
    }
}

// Easy access to team members personal pictures
const img1 = "images/time/gabriel_p1.png";
const img2 = "images/time/andre_p2.png";
const img3 = "images/time/roberto_p3.png";
const img4 = "";
const img5 = "";
const img6 = "";
const img7 = "";
const img8 = "";
const img9 = "";

// Team members
//          Name,           Instagram,             Facebook,           Whatsapp,     Description, Image
    // Gabriel
    const person1 = new Barbeiro(
        "GABRIEL", "@gabrielp_ferreira", "gabriel.polak.754", "(42) 00000-0000" ,"-", img1,
    );
    // André
    const person2 = new Barbeiro(
        "ANDRE", "@anndresantos01", "-", "(42) 98890-1063", "-", img2,
    );
    // Roberto
    const person3 = new Barbeiro(
        "ROBERTO", "@roberto_przy", "-", "-", "-", img3,
    );
    // 
    const person4 = new Barbeiro(
        "-", "-", "-", "-", "-", img4,
    );
    // 
    const person5 = new Barbeiro(
        "-", "-", "-", "-", "-", img5,
    );
    // 
    const person6 = new Barbeiro(
        "-", "-", "-", "-", "-", img6,
    );
    // 
    const person7 = new Barbeiro(
        "-", "-", "-", "-", "-", img7,
    );
    // 
    const person8 = new Barbeiro(
        "-", "-", "-", "-", "-", img8,
    );
    // 
    const person9 = new Barbeiro(
        "-", "-", "-", "-", "-", img9,
    );

// Getting each team member into HTML
function alterDom (nameId, descriptionId, instagramId, facebookId, whatsappId, imgId, person) {
    document.getElementById(nameId).innerText = person.name; 
    document.getElementById(imgId).src = person.img;
    document.getElementById(instagramId).href = `https://www.instagram.com/${person.instagram.replace("@", "")}`; 
    document.getElementById(whatsappId).href = `https://wa.me/${person.whats.replace(/\D/g, "")}`; 
    // document.getElementById(descriptionId).innerText = person.desc;   
    //document.getElementById(facebookId).href = `https://www.facebook.com/${person.facebook}`; 
}

// Changing DOM, adding more team members as necessary
// Bigger Screens
alterDom ("person1", "person1-desc","person1-instagram","person1-facebook","person1-whatsapp", "person1-img", person1);
alterDom ("person2", "person2-desc","person2-instagram","person2-facebook","person2-whatsapp", "person2-img", person2);
alterDom ("person3", "person3-desc","person3-instagram","person3-facebook","person3-whatsapp", "person3-img", person3);
/*
alterDom ("person4", "person4-desc","person4-instagram","person4-facebook","person4-whatsapp", "person4-img", person4);
alterDom ("person5", "person5-desc","person5-instagram","person5-facebook","person5-whatsapp", "person5-img", person5);
alterDom ("person6", "person6-desc","person6-instagram","person6-facebook","person6-whatsapp", "person6-img", person6);
alterDom ("person7", "person7-desc","person7-instagram","person7-facebook","person7-whatsapp", "person7-img", person7);
alterDom ("person8", "person8-desc","person8-instagram","person8-facebook","person8-whatsapp", "person8-img", person8);
alterDom ("person9", "person9-desc","person9-instagram","person9-facebook","person9-whatsapp", "person9-img", person9);
*/

// Smaller Devices
alterDom ("person1sm", "person1sm-desc","person1sm-instagram","person1sm-facebook","person1sm-whatsapp", "person1sm-img", person1);
alterDom ("person2sm", "person2sm-desc","person2sm-instagram","person2sm-facebook","person2sm-whatsapp", "person2sm-img", person2);
alterDom ("person3sm", "person3sm-desc","person3sm-instagram","person3sm-facebook","person3sm-whatsapp", "person3sm-img", person3);
/*
alterDom ("person4sm", "person4sm-desc","person4sm-instagram","person4sm-facebook","person4sm-whatsapp", "person4sm-img", person4);
alterDom ("person5sm", "person5sm-desc","person5sm-instagram","person5sm-facebook","person5sm-whatsapp", "person5sm-img", person5);
alterDom ("person6sm", "person6sm-desc","person6sm-instagram","person6sm-facebook","person6sm-whatsapp", "person6sm-img", person6);
alterDom ("person7sm", "person7sm-desc","person7sm-instagram","person7sm-facebook","person7sm-whatsapp", "person7sm-img", person7);
alterDom ("person8sm", "person8sm-desc","person8sm-instagram","person8sm-facebook","person8sm-whatsapp", "person8sm-img", person8);
alterDom ("person9sm", "person9sm-desc","person9sm-instagram","person9sm-facebook","person9sm-whatsapp", "person9sm-img", person9);
*/

// #endregion ---------------------------------------------------------------------------------------//