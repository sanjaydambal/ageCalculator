const dateInput = document.querySelector("input");
const pElement = document.querySelector("p");

dateInput.addEventListener("change",()=>{
    const birthDate = new Date(dateInput.value);
    const curDate = new Date();
    const timeDiff = curDate - birthDate;
    
    const years = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    const remainingTime = timeDiff - (years * 365.25 * 24 * 60 * 60 * 1000);
    
    const months = Math.floor(remainingTime / (30.44 * 24 * 60 * 60 * 1000));
    const remainingTimeMonths = remainingTime - (months * 30.44 * 24 * 60 * 60 * 1000);
    
    const days = Math.floor(remainingTimeMonths / (24 * 60 * 60 * 1000));
    pElement.innerText = `Your ${years} age ${months} months ${days} days old`;
})
// const dateInput = document.querySelector("input");
// const pElement = document.querySelector("p");

// dateInput.addEventListener("change", () => {
//     const birthDate = new Date(dateInput.value);
//     const curDate = new Date();
//     const timeDiff = curDate - birthDate;
    
//     const years = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
//     const remainingTime = timeDiff - (years * 365.25 * 24 * 60 * 60 * 1000);
    
//     const months = Math.floor(remainingTime / (30.44 * 24 * 60 * 60 * 1000));
//     const remainingTimeMonths = remainingTime - (months * 30.44 * 24 * 60 * 60 * 1000);
    
//     const days = Math.floor(remainingTimeMonths / (24 * 60 * 60 * 1000));
    
//     pElement.innerText = `Your ${years} years ${months} months ${days} days old`;
// });
