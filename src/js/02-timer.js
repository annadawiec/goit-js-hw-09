import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let timerActive = null;
refs.buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.buttonStart.disabled = false;
      refs.buttonStart.addEventListener('click', () => {
        timerActive = setInterval(() => {
          refs.buttonStart.disabled = true;
          const dateChoosenMs = new Date(
            refs.input.value.replace(/-/g, '/')
          ).getTime();
          const now = new Date().getTime();
          const deltaTime = dateChoosenMs - now;
          const { days, hours, minutes, seconds } = convertMs(deltaTime);

          refs.dataDays.innerHTML = days < 10 ? addLeadingZero(days) : days;
          refs.dataHours.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          refs.dataMinutes.innerHTML =
            minutes < 10 ? addLeadingZero(minutes) : minutes;
          refs.dataSeconds.innerHTML =
            seconds < 10 ? addLeadingZero(seconds) : seconds;
          if (deltaTime < 1000) {
            clearInterval(timerActive);
          }
        }, 1000);
      });
    }
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr('#datetime-picker', options);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
