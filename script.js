const rooms={
AI:["Artificial Intelligence","AI transforms education, employment, and daily life.","AI tools are used in learning, business, and digital services in the Philippines.","Benefits: innovation and productivity. Challenges: privacy and ethical concerns."],
Climate:["Climate Technology","Technology helps address climate change and disasters.","Used for weather monitoring, flood response, and disaster preparation.","Benefits: safety. Challenges: cost and accessibility."],
Bio:["Biotechnology","Biological innovation supports health, agriculture, and food production.","Applications include medical research and agriculture.","Benefits: improved solutions. Challenges: ethical issues."],
Energy:["Renewable Energy","Clean energy technologies support sustainability.","Solar, wind, and geothermal resources in the Philippines.","Benefits: cleaner energy. Challenges: infrastructure."],
Cyber:["Cybersecurity","Protecting digital information and systems.","Addresses scams, hacking, and data privacy.","Benefits: safer digital spaces. Challenges: evolving threats."],
Space:["Space Science","Satellites and research support national development.","Weather monitoring and disaster management.","Benefits: scientific advancement. Challenges: resources."],
Waste:["E-Waste","Electronic waste creates environmental concerns.","Proper disposal and recycling are needed.","Benefits: sustainability. Challenges: pollution."],
Digital:["Digital Inequality","Differences in technology access affect communities.","Internet access and digital skills remain important issues.","Benefits: inclusion. Challenges: unequal access."]
};
function openRoom(x){document.getElementById("room").style.display="block";title.innerHTML=rooms[x][0];text.innerHTML=rooms[x][1];context.innerHTML=rooms[x][2];impact.innerHTML=rooms[x][3]}
function closeRoom(){document.getElementById("room").style.display="none"}
function enterMuseum(){document.getElementById("gallery").scrollIntoView({behavior:"smooth"})}