const carouselContainers = document.querySelectorAll('.carousel');
const previousArrowButtons = document.querySelectorAll('.arrow-button.previous');
const nextArrowButtons = document.querySelectorAll('.arrow-button.next');

//loop though buttons and give mak the carousel slide on click
Array.from(nextArrowButtons).map((nextArrowButton) => {
	nextArrowButton.addEventListener('click', () => {
	let cardsContainer = nextArrowButton.previousElementSibling.children[0];
	let activeArray = assignActiveClasses(cardsContainer);
	let firstActiveCard = activeArray[0];
	let lastActiveCard = activeArray[activeArray.length - 1];
	// if the visible item sliding to the right isnt the last one and theres an existing item that can slide from the left
		if(firstActiveCard.NextElementSibling !== null && lastActiveCard.nextElementSibling !== null) {
			let rightCard = lastActiveCard.nextElementSibling;
			//move cards
			activeArray.map((card) => {
				card.classList.add('card-animate');
				card.style.transform = 'translateX(-110%)';
			});

			activeArray[0].addEventListener('transitionend', () => {
				//add card from the right
				rightCard.style.transform = 'translateX(110%)';
				rightCard.classList.remove('card-inactive');
				rightCard.classList.add('card-active');
				rightCard.classList.add('card-animate');
				//the timeout so it animates after the card has the transition property
				setTimeout(() => {
					rightCard.style.transform = 'unset';
				}, 1);
				//remove card on the left 
				firstActiveCard.classList.remove('card-active');
				firstActiveCard.classList.add('card-inactive');
				//remove animation and reset position
				activeArray.map((card) => {
					card.classList.remove('card-animate');
					card.style.transform = 'unset';
				});
			}, { once: true });
		}
	});
}) 

Array.from(previousArrowButtons).map((previousArrowButton) => {
	previousArrowButton.addEventListener('click', () => {
		let cardsContainer = previousArrowButton.nextElementSibling.children[0];
		let activeArray = assignActiveClasses(cardsContainer);
		let firstActiveCard = activeArray[0];
		let lastActiveCard = activeArray[activeArray.length - 1];

		// if the visible item sliding to the left isnt the last one and theres an existing item that can slide from the right
		if(firstActiveCard.previousElementSibling !== null && lastActiveCard.previousElementSibling !== null) {
			let leftCard = firstActiveCard.previousElementSibling;
			//move cards
			activeArray.map((card) => {
				card.classList.add('card-animate');
				card.style.transform = 'translateX(110%)';
			});

			activeArray[0].addEventListener('transitionend', () => {
				//add card from the left
				leftCard.style.transform = 'translateX(-110%)';
				leftCard.classList.remove('card-inactive');
				leftCard.classList.add('card-active');
				leftCard.classList.add('card-animate');
				//the timeout so it animates after the card has the transition property
				setTimeout(() => {
					leftCard.style.transform = 'unset';
				}, 1);
				//remove card from the right
				lastActiveCard.classList.remove('card-active');
				lastActiveCard.classList.add('card-inactive');
				//remove animation and reset position
				activeArray.map((card) => {
					card.classList.remove('card-animate');
					card.style.transform = 'unset';
				});
			}, { once: true });
			
		}
	});
}); 

function assignActiveClasses(cardsContainer) {
	let activeArray = [];
	let cardsContainerPosition = cardsContainer.getBoundingClientRect();

	Array.from(cardsContainer.children).map((card) => {
			let cardPosition = card.getBoundingClientRect();
			//assign active class to visible elements
			if(cardPosition.left < cardsContainerPosition.right && cardPosition.right > cardsContainerPosition.left) {
				card.classList.add('card-active');
				activeArray.push(card);
			} else {
				card.classList.add('card-inactive');
			}
		});
	return activeArray;
}

//reassign active classes when window gets resized
window.addEventListener('resize', () => {
	Array.from(carouselContainers).map((carouselContainer => {
		let cardsContainer = carouselContainer.children[1].children[0];
		Array.from(cardsContainer.children).map((card) => {
			card.classList.add('card-active');
			card.classList.remove('card-inactive');
		});
		assignActiveClasses(cardsContainer);
	}))
})