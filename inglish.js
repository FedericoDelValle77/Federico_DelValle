let devProfile = {
fullName: "Federico Agustin Del Valle",
age: 21,
profession: "Backend Developer",
skills: ['JavaScript','Java','Python'],
isEmployed: false,
contact: {
email: "fededelvalle77@gmail.com",
location: "Obera, Misiones, Argentina",
}
};



console.log(Profile(devProfile))
function Profile(profile) {
    return "Hi, my name is " + profile.fullName + ". I am "
     + profile.age + " years old and I am a " + profile.profession + 
     ". I have skills in " + profile.skills.join(", ") 
     + ". Currently, I am " + (profile.isEmployed ? "employed" : "not employed")
      + ". You can contact me at " + profile.contact.email + " or find me in " + profile.contact.location;}
