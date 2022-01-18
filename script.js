fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
        const cards = document.querySelectorAll(".card:not(.main-card)");
        const periods = document.querySelectorAll('.period')

        periods.forEach(p => p.addEventListener('click', selectPeriod))

        updateDataWithPeriod("weekly");

        function updateDataWithPeriod(period) {
            cards.forEach((c, k) => {
                const hours = c.querySelector(".hours");
                hours.innerText = `${data[k].timeframes[period].current}hrs`;
                const last = c.querySelector(".last");
                last.innerText = `${
          period === "weekly"
            ? "Last week"
            : period === "monthly"
            ? "Last month"
            : "Yesterday"
        } - ${data[k].timeframes[period].previous}hrs`;
            });
        }


        function selectPeriod() {
            periods.forEach(p => p.classList.remove('selected'))
            this.classList.add('selected')
            updateDataWithPeriod(this.dataset.period)
        }
    });