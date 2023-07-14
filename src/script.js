//left sidebar code
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      modeText = body.querySelector(".mode-text");


$("")

//schedule code here
document.querySelector("#schedule-click").addEventListener("click", ()=>{
    document.querySelector("#change").innerHTML="<div class="text">Welcome,User!</div>

    <!--========================== Main code starts============================-->

    <div class="container">
        <div class="heading">
            <h1 class="heading-text">Your Schedule</h1>
        </div>
        <div class="kanban-board-full">


            <div class="kanban-board upper">


                <div class="kanban-block" id="monday-block">
                    <div class="kanban-block-heading" id="monday">
                        <strong>MONDAY</strong>
                    </div>
                    <div class="kanban-block-space" id="monday-tasks">
                        <button class="add-class-btn">+</button>
                    </div>
                </div>


                <div class="kanban-block" id="tuesday-block" >
                    <div class="kanban-block-heading" id="tuesday">
                        <strong>TUESDAY</strong>
                    </div>
                    <div class="kanban-block-space" id="tuesday-tasks">
                        <button class="add-class-btn">+</button>
                    </div>
                </div>


                <div class="kanban-block" id="wednesday-block" >
                    <div class="kanban-block-heading" id="wednesday">
                        <strong>WEDNESDAY</strong>
                    </div>
                    <div class="kanban-block-space" id="wednesday-tasks">
                        <button class="add-class-btn">+</button>
                    </div>
                </div>

            </div>


            <div class="kanban-board lower">

                    <div class="kanban-block" id="thursday-block">
                        <div class="kanban-block-heading" id="thursday">
                            <strong>THURSDAY</strong>
                        </div>
                        <div class="kanban-block-space" id="thursday-tasks">
                            <button class="add-class-btn">+</button>
                        </div>
                    </div>


                    <div class="kanban-block" id="friday-block" >
                        <div class="kanban-block-heading" id="friday">
                            <strong>FRIDAY</strong>
                        </div>
                        <div class="kanban-block-space" id="friday-tasks">
                            <button class="add-class-btn">+</button>
                        </div>
                    </div>


                    <div class="kanban-block" id="saturday-block" >
                        <div class="kanban-block-heading" id="saturday">
                            <strong>SATURDAY</strong>
                        </div>
                        <div class="kanban-block-space" id="saturday-tasks">
                            <button class="add-class-btn">+</button>
                        </div>
                    </div>

            </div>
        </div>
    </div>";;
})
$(".kanban-block").mouseover(function(){
    $(this).addClass("kanban-block-hover");
});

$(".kanban-block").mouseout(function(){
    $(this).removeClass("kanban-block-hover");
});


//calendar js starts
document.querySelector("#calendar-click").addEventListener("click", ()=>{
    document.querySelector("#change").innerHTML=" <div class="container"><div class="calendar"><div class="month"><i class="fas fa-angle-left prev"></i><div class="date"><h1></h1><p></p></div><i class="fas fa-angle-right next"></i></div><div class="weekdays"><div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div><div class="days"></div></div></div>";
})
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


//Analytics js
const data = {
    'Subject 1': 66,
    'Subject 2': 78,
    'Subject 3': 93,
    'Subject 4': 47,
    'Subject 5': 84,
    'Subject 6': 88
};
const ctx = document.getElementById('mybarChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(data),
        datasets: [{
            label: 'Attendance Percentage',
            data: Object.values(data),
        }, ],
    },
    options: {
        plugins: {
            title: {
              display: true,
              text: 'Attendance Percentage By Subject',
              font: {
                size: 16
              }
            },
          },
        backgroundColor: [
            // 'rgba(226,234,60, 0.3)',  // Bar 1
            'rgba(194,172,57, 0.3)',  // Bar 2
            'rgba(16,44,139, 0.3)',  // Bar 3
            'rgba(179,138,114, 0.3)',  // Bar 4
            'rgba(77,212,123, 0.3)', // Bar 5
            //'rgba(156,167,20, 0.3)',  // Bar 6
            'rgba(166,2,136, 0.3)',  // Bar 7
            //'rgba(70,123,116, 0.3)',  // Bar 8
            'rgba(54,185,183, 0.3)',  // Bar 9
            //'rgba(154,251,39, 0.3)',  // Bar 10
            //'rgba(155,12,8, 0.3)', // Bar 11
            //'rgba(171,212,68, 0.3)'   // Bar 12
        ],
        indexAxis: "y",
        borderWidth: 2,
        borderColor: 'black',
        mantainAspectRatio: false,
        responsive: false
    }
});
