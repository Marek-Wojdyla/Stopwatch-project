//buttons
const actionbtn = document.querySelector('.play');
const pausebtn = document.querySelector('.pause');
const savebtn = document.querySelector('.save');
const trashbtn = document.querySelector('.trash');
const historyBtn = document.querySelector('.history');
//time after stop
const stopWatch = document.querySelector('.stop-watch');
const startTime = document.querySelector('.stoper__box-text');
//clickable icons
const info = document.querySelector('.info');
const brush = document.querySelector('.brush');
//time list
const timeList = document.querySelector('.time-list');
//modal-shadow and close button
const modalShadow = document.querySelector('.modal-shadow');
const closeBtn = document.querySelector('.close');
//modal-color and 4 color
const colorBox = document.querySelector('.color-box');
const redColor = document.querySelector('.one');
const greenColor = document.querySelector('.two');
const blueColor = document.querySelector('.three');
const yellowColor = document.querySelector('.four');
//downloading root variable
let root = document.querySelector(':root');

//Test to see if I downloaded all the icons correctly
// console.log('buttony', actionbtn, pausebtn, savebtn, trashbtn, historyBtn);
// console.log('----------------------------------------------------------');
// console.log('Time after stop', stopWatch);
// console.log('----------------------------------------------------------');
// console.log('clickable Icons', questionIcon, brushIcon);
// console.log('----------------------------------------------------------');
// console.log('time list', timeList);
// console.log('----------------------------------------------------------');
// console.log('modal-shadow and close button', modalShadow, closeBtn);
//---------------------------------------------------------------------------//

//create time start function
let countTime;
let seconds = 0;
let minutes = 0;
let timeArr = [];

const startCountingTime = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			startTime.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			startTime.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			startTime.textContent = `${minutes}:00`;
		}
	}, 100);
};
// end fuction
//-----------------------------------------------------------

//creating function to stop counting time
const stopCountingTime = () => {
	clearInterval(countTime);
};
// end fuction
//-----------------------------------------------------------

//creating saving function

const saveTime = () => {
	stopWatch.innerHTML = `Ostatni zapisany czas: ${startTime.textContent}`;

	if (startTime.textContent !== '0:00') {
		stopWatch.style.visibility = 'visible';
		timeArr.push(startTime.textContent);
	}

	clearData();
};
// end fuction
//-----------------------------------------------------------

//creating remove time function
const removeTime = () => {
	stopWatch.style.visibility = 'hidden';
	timeArr = [];
	clearData();
};

// end fuction
//-----------------------------------------------------------

//creating helper to saveTime, removeTime functio
const clearData = () => {
	clearInterval(countTime);
	startTime.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};
// end fuction
//-----------------------------------------------------------

//creating function which saving date to history
const historyTime = () => {
	timeList.textContent = '';
	let num = 1;
	if (timeArr.length > 0) {
		timeList.style.display = 'block';

		timeArr.forEach((time) => {
			let newData = document.createElement('li');
			newData.innerHTML = `Pomiar ${num} czasu: ${time}`;
			timeList.appendChild(newData);
			num++;
		});
	}
};
// end fuction
//-----------------------------------------------------------

//creating function which show modal with use information
const showModal = () => {
	modalShadow.style.display = 'block';
	closeBtn.addEventListener('click', () => {
		modalShadow.style.display = 'none';
	});
};

// end fuction
//-----------------------------------------------------------

//create function which change color aplication
const changeColor = () => {
	colorBox.classList.toggle('show');
	redColor.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'red');
	});
	blueColor.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'royalblue');
	});
	greenColor.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'olivedrab');
	});
	yellowColor.addEventListener('click', () => {
		root.style.setProperty('--first-color', 'yellow');
	});
};

actionbtn.addEventListener('click', startCountingTime);
pausebtn.addEventListener('click', stopCountingTime);
savebtn.addEventListener('click', saveTime);
trashbtn.addEventListener('click', removeTime);
historyBtn.addEventListener('click', historyTime);
info.addEventListener('click', showModal);
brush.addEventListener('click', changeColor);
