console.log();
const pkmnName = document.querySelector<HTMLInputElement>("#pkmn-name");
const pkmnType = document.querySelector<HTMLSelectElement>("#type");
const health = document.querySelector<HTMLInputElement>("#health");
const picture = document.querySelector<HTMLInputElement>("#picture");
const button = document.querySelector<HTMLButtonElement>("#button");

let cardCount = 0;
const maxCards = 5;

button?.addEventListener("click", () => {
    if (cardCount >= maxCards) {
      window.alert("Maximum card limit reached.");
      return;
    }
    setTimeout(() => {
      const card = document.createElement("div");
      card.className =
        "border-2 border-gray-600 shadow-2xl w-[10vw] h-[100%] rounded-2xl p-[1vw]";
  
      const type = pkmnType?.value;
      switch (type) {
        case "Elektro":
          card.style.backgroundColor = "yellow";
          break;
        case "Water":
          card.style.backgroundColor = "rgb(0, 115, 255)";
          break;
        case "Fire":
          card.style.backgroundColor = "red";
          break;
        case "Normal":
          card.style.backgroundColor = "gray";
          break;
        case "Dragon":
          card.style.backgroundColor = "darkblue";
          break;
        case "Grass":
          card.style.backgroundColor = "green";
          break;
        case "Ground":
          card.style.backgroundColor = "sandybrown";
          break;
        case "Ghost":
          card.style.backgroundColor = "purple"; 
          break;
        default:
          card.style.backgroundColor = "white"; 
      }
  
      const cardHead = document.createElement("div");
      cardHead.id = "card-head";
      cardHead.className = "flex justify-between text-[1vw] mb-[1vh]";
  
      const cardName = document.createElement("div");
      cardName.id = "card-name";
      cardName.className = "flex justify-start";
      cardName.textContent = `${pkmnName?.value}`;
  
      const cardHealth = document.createElement("div");
      cardHealth.id = "card-health";
      cardHealth.className = "flex justify-end text-[0.7vw]";
      cardHealth.textContent = `HP ${health?.value}`;
  
      cardHead.appendChild(cardName);
      cardHead.appendChild(cardHealth);
  
      const cardPictureContainer = document.createElement("div");
      cardPictureContainer.className = "flex justify-center mb-[1vh]";
  
      const cardPicture = document.createElement("div");
      cardPicture.id = "card-picture";
      cardPicture.className = `w-[100%] h-[12vh] bg-cover bg-no-repeat border-4 rounded-xl`;
  
      
      const pictureUrl = picture?.value;
      if (pictureUrl) {
        cardPicture.style.backgroundImage = `url(${pictureUrl})`;
      } else {
        cardPicture.style.backgroundColor = "gray"; 
      }
  
      cardPictureContainer.appendChild(cardPicture);
  
      const cardType = document.createElement("div");
      cardType.id = "card-type";
      cardType.className = "text-center text-[1vw]";
      cardType.textContent = `Type: ${type}`;
  
      card.appendChild(cardHead);
      card.appendChild(cardPictureContainer);
      card.appendChild(cardType);
  
      const article = document.getElementById("cards");
      if (article) {
        article.appendChild(card);
        cardCount++;
      }
  
      
      if (pkmnName && pkmnType && health && picture) {
        pkmnName.value = "";
        pkmnType.value = "Normal";
        health.value = "";
        picture.value = "";
      }
    }, 200); 
  });

  const audioElement = document.getElementById("audioElement") as HTMLAudioElement;
  const toggleButton = document.getElementById("toggleAudio") as HTMLButtonElement;
  let isPlaying = true;
  toggleButton.addEventListener("click", () => {
    if (isPlaying) {
      audioElement.pause();
      toggleButton.textContent = "Play Audio";
    } else {
      audioElement.play();
      toggleButton.textContent = "Pause Audio";
    }
    isPlaying = !isPlaying;
  });
  
