//функция выводит на страницу шаг квеста (текст-картинка-кнопки)//
function displayStep(stepIndex) {       
    let step = gameSteps[stepIndex];
    let newStepText = document.getElementById("stepText");     //обращается к элементу страницы quest.html по id и записывает в перем//
    let newStepImage = document.getElementById("stepImage");
    let actionsContainer = document.getElementById("actions");
    actionsContainer.innerHTML = "";                           //очищает содержимое actionsContainer для след. шага//
    newStepText.innerText = step.text;
    newStepImage.src = step.image;
    //цикл создает кнопки текущего шага на каждый элемент массива step.actions и добавляет в actionsConteiner//
    for (let i = 0; i < step.actions.length; i++) {
        let actionButton = document.createElement("button");
        actionButton.innerText = step.actions[i].text;
        actionButton.classList.add('btn');
        actionButton.onclick = function () {                    //добавляет обработчик события onclick и действие по клику//
            executeAction(step.actions[i].nextStep);                   
        };
        actionsContainer.appendChild(actionButton); 
    }
};

//функция осуществляет переход от шага к шагу (выполняется при нажатии на кнопку)//
function executeAction(nextStep) {
    currentStep = nextStep;
    displayStep(currentStep);
};

const gameSteps = [
    {
        indx: 0,
        text: "Вам необходимо попасть в помещение лаборатории. Окна закрыты решетками. У вас только 2 варианта:",
        image: "images/first.jpg",
        actions: [
            {
                text: "Незаметно войти через черный вход",
                nextStep: 1
            },
            {
                text: "Притвориться сотрудником и войти через главный вход",
                nextStep: 2
            }
        ]
    },
    {
        indx: 1,
        text: "Вы у другой части здания. Дверь служебного входа заперта на ключ, имеющийся только у персонала. Что будете делать?",
        image: "images/door1.jpg",
        actions: [
            {
                text: "Взломать дверь отмычкой",
                nextStep: 3
            },
            {
                text: "Взломать дверь ломом",
                nextStep: 4
            }
        ]
    },
    {
        indx: 2,
        text: "Вы решили притвориться одним из сотрудников, но на входе в лабораторию Вас настигла охрана. У Вас спросили, по какой причине Вы не можете пройти через систему контроля пропусков. Каков будет ваш ответ?",
        image: "images/secur.jpg",
        actions: [
            {
                text: "Сказать, что пропуск утерян",
                nextStep: 5
            },
            {
                text: "Сказать, что пропуск размагничен и показать муляж карты персонала",
                nextStep: 6
            }
        ]
    },
    {
        indx: 3,
        text: "Вы незаметно открыли дверь! Теперь нужно определиться, в каком направлении двигаться:",
        image: "images/way.jpg",
        actions: [
            {
                text: "Пройти в архив",
                nextStep: 9
            },
            {
                text: "Пройти на склад препаратов",
                nextStep: 10
            }
        ]
    },
    {
        indx: 4,
        text: "Лом - не самый подходящий инструмент для этой двери. Дверь Вы не открыли, зато привлекли внимание. Это было слишком громко! Необходимо срочно спрятаться!",
        image: "images/hide.jpg",
        actions: [
            {
                text: "Спрятаться в подсобке с отходами",
                nextStep: 8
            },
            {
                text: "Спрятаться в кустах",
                nextStep: 7
            }
        ]
    },
    {
        indx: 5,
        text: "Чтобы оформить новый пропуск, Ваши данные решили перепроверить с помощью базы сотрудников, где Вас не оказалось. Вас сдали сотрудникам полиции за попытку проникновения! Операция провалена!",
        image: "images/police.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    },
    {
        indx: 6,
        text: "Охрана сегодня не особенно бдительна! Вам очень повезло, Вас решили пропустить сегодня, взяв обещание разобраться с размагниченной картой. Выберите направление:",
        image: "images/hall.jpg",
        actions: [
            {
                text: "Пройти в архив",
                nextStep: 9
            },
            {
                text: "Пройти на склад препаратов",
                nextStep: 10
            }
        ]
    },
    {
        indx: 7,
        text: "Вас не заметили! Вам очень повезло, теперь у вас есть только один вариант.",
        image: "images/door1.jpg",
        actions: [
            {
                text: "Взломать дверь смычком",
                nextStep: 3
            }
        ]
    },
    {
        indx: 8,
        text: "Вы слишком много времени провели в подсобке и надышались токсичными газами! Вас заметил сотрудник и скоро вам окажут помощь, а затем отправят в участок. Операция провалена!",
        image: "images/toxic.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    },
    {
        indx: 9,
        text: "Вы проникили в архив и среди груды бумаг наткнулись на папку с заголовком ICI(0-22). Выберите дальнейшее действие:",
        image: "images/folder.jpg",
        actions: [
            {
                text: "Взять папку",
                nextStep: 15
            },
            {
                text: "Нам не нужна папка! Оставить папку и уйти", 
                nextStep: 16
            }
        ]
    },
    {
        indx: 10,
        text: "Вы проникли на склад препаратов. Вокруг огромное количество стеллажей с лекарствами. Однако Ваше внимание привлекли две баночки с одинаковым названием ICI-22, но с разным цветом упаковки (синий и фиолетовый). Времени мало! Какой бутылек возьмете?",
        image: "images/lec.jpg",
        actions: [
            {
                text: "Фиолетовый бутылек",
                nextStep: 11
            },
            {
                text: "Синий бутылек", 
                nextStep: 12
            }
        ]
    },
    {
        indx: 11,
        text: "Спрячьте фиолетовый бутылек в карман и срочно выбирайтесь! Операция почти завершена!",
        image: "images/corner.jpg",
        actions: [
            {
                text: "Направиться к выходу",
                nextStep: 14
            }
        ]
    },
    {
        indx: 12,
        text: "Спрячьте синий бутылек в карман и срочно выбирайтесь! Операция почти завершена!",
        image: "images/corner.jpg",
        actions: [
            {
                text: "Направиться к выходу",
                nextStep: 13
            }
        ]
    },
    {
        indx: 13,
        text: "Вы вовремя завершили операцию и остались незамеченными! Но у вас в руках оказался совсем не тот бутылек! Верный цвет баночки - фиолетовый. Операция провалена!",
        image: "images/fail.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    },
    {
        indx: 14,
        text: "Вы вовремя завершили операцию и остались незамеченными! У вас в руках оказался нужный бутылек! Операция выполнена успешно!",
        image: "images/victory.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    },
    {
        indx: 15,
        text: "Спрячьте папку в халат и скорее покидайте лабораторию!",
        image: "images/hidefolder.jpg",
        actions: [
            {
                text: "Направиться к выходу",
                nextStep: 17
            }
        ]
    },
    {
        indx: 16,
        text: "Вы потратили слишком много времени впустую! У вас совсем не остается времени, скоро включат камеры видеонаблюдения!",
        image: "images/getout.jpg",
        actions: [
            {
                text: "Направиться к выходу",
                nextStep: 18
            }
        ]
    },
    {
        indx: 17,
        text: "Вы вовремя завершили операцию! Вы успешно прошли испытание и остались незамеченным. Вам удалось найти данные о составе необходимого препарата и формулы всех предшествующих его версий! Операция выполнена успешно!",
        image: "images/victory.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    },
    {
        indx: 18,
        text: "Вы вовремя завершили операцию и остались незамеченным. Но вы провалили задание, не получив необходимых данных! ",
        image: "images/fail.jpg",
        actions: [
            {
                text: "Начать сначала",
                nextStep: 0
            }
        ]
    }
];

let currentStep = 0;
displayStep(currentStep);
