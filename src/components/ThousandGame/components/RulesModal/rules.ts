export const rules = {
    ru: {
        goal: {
            head: "Цель игры",
            text: "Первым набрать <b>ровно 1000 очков</b>, используя 5 игральных кубиков и специальную систему подсчета комбинаций. Игроки бросают кубики по очереди, откладывают очки и продолжают бросок (при выпадении игровой комбинации), пока не решат сохранить очки или пока не выпадет «пустой» ход (при броске кубиков игровой комбинации не случилось)."
        },
        comboScore: {
            head: "Комбинации и очки",
            text: "<b>Три единицы:</b> 100 очков.\n" +
                "<b>Четыре единицы</b>: 400 очков.\n" +
                "<b>Пять единиц</b> автоматически победа!\n" +
                "<b>Одиночные кубики</b>: 1 = 10 очков, 5 = 5 очков (остальные цифры по отдельности очков не приносят).\n" +
                "<b>Три одинаковых кубика</b>: номинал умножается на 10 (три двойки — 20, три тройки — 30, три четверки — 40, три пятерки — 50, три шестерки — 60).\n" +
                "<b>Четыре одинаковых кубика</b>: номинал умножается на 40.\n" +
                "<b>Пять одинаковых кубиков</b>: номинал умножается на 100."
        },
        gamePlay: {
            head: "Ход игры",
            text: "<b>Начало хода</b>: игрок бросает все 5 кубиков.\n" +
                "<b>Отбор кубиков</b>: нужно отложить хотя бы один результативный кубик (либо 1, либо 5) или игровую комбинацию.\n" +
                "<b>Переброс</b>: оставшиеся кубики можно бросить повторно, чтобы добрать очки.\n" +
                "<b>\"Пустые\"</b> броски: если в каком-то броске не выпало ни одного результативного кубика, очки за этот ход сгорают. Когда за один ход у игрока задействованы все 5 кубиков (например, выпали три пятерки и две единицы), он может сделать еще один полный бросок всеми пятью кубиками."
        },
        restrictions: {
            head: "Особые правила и ограничения",
            text: "<b>Вход в игру</b>: нужно набрать минимум <b>65 очков</b> за один подход, чтобы открыть счет.\n" +
                "Игрок, набравший больше <b>295 очков</b>, входит в <b>первую красную зону</b>. У него есть три попытки набрать оставшиеся очки до <b>395 очков</b>. Если он не успевает, <b>теряет 50 очков</b>. Так же и для промежутка между <b>595 и 695 очками</b> (<b>вторая красная зона</b>).\n" +
                "Когда один <b>игрок обгоняет другого</b> по очкам, обогнанный <b>теряет 50 очков</b>.Если у двух игроков одинаковые очки, то обогновшим считается тот, кто первым сохранит очки.\n" +
                "Выбросив <b>больше 1000</b> игрок сразу <b>теряет 50 очков</b> и передаёт ход."
        },
        diceCombinations: {
            head: "Краткий обзор",
            text: "<b>Игровые комбинации кубиков:</b>\n" +
                "• Три одинаковых цифры\n" +
                "• Четыре одинаковых цифры\n" +
                "• Пять одинаковых цифр\n" +
                "• Каждая выпавшая 1\n" +
                "• Каждая выпавшая 5\n\n" +
                "<b>Зоны:</b>\n" +
                "• Стартовая зона: 0–65 очков\n" +
                "• Первая красная зона: 295–395 очков\n" +
                "• Вторая красная зона: 595–695 очков"
        }

    },
    en: {
        goal: {
            head: "Game Goal",
            text: "To become the first player to score <b>exactly 1000 points</b> using 5 dice and a special combination scoring system. Players take turns rolling the dice, setting aside scoring dice and continuing to roll (when a scoring combination is rolled) until they decide to bank their points or roll a \"bust\" (when no scoring combination is rolled)."
        },
        comboScore: {
            head: "Combinations and Scoring",
            text: "<b>Three ones</b>: 100 points.\n" +
                "<b>Four ones</b>: 400 points.\n" +
                "<b>Five ones</b>: automatic victory!\n" +
                "<b>Single dice</b>: 1 = 10 points, 5 = 5 points (other individual numbers score no points).\n" +
                "<b>Three of a kind</b>: the face value is multiplied by 10 (three twos = 20, three threes = 30, three fours = 40, three fives = 50, three sixes = 60).\n" +
                "<b>Four of a kind</b>: the face value is multiplied by 40.\n" +
                "<b>Five of a kind</b>: the face value is multiplied by 100."
        },
        gamePlay: {
            head: "Gameplay",
            text: "<b>Starting a turn</b>: the player rolls all 5 dice.\n" +
                "<b>Selecting dice</b>: at least one scoring die (either a 1 or a 5) or a scoring combination must be set aside.\n" +
                "<b>Rerolling</b>: the remaining dice can be rolled again to score additional points.\n" +
                "<b>\"Bust\" rolls</b>: if a roll produces no scoring dice or combinations, all points accumulated during that turn are lost. When all 5 dice have been used during a single turn (for example, three fives and two ones are rolled), the player may roll all five dice again."
        },
        restrictions: {
            head: "Special Rules and Restrictions",
            text: "<b>Entering the game</b>: a player must score at least 65 points in a single turn to open their score.\n" +
                "A player who scores more than <b>295 points</b> enters the <b>first red zone</b>. They have three attempts to reach <b>395 points</b>. If they fail, <b>lose 50 points</b>. The same rule applies to the <b>second red zone</b>, between <b>595</b> and <b>695 points</b>.\n" +
                "When one <b>player overtakes</b> another in points, the player who was overtaken <b>loses 50 points</b>. If both players have the same score, the player who banks their points first is considered to have overtaken the other.\n" +
                "If a player scores <b>more than 1000 points</b>, they immediately <b>lose 50 points</b> and pass their turn."
        },
        diceCombinations: {
            head: "Brief Overview",
            text: "<b>Dice combinations:</b>\n" +
                "• Three of a kind\n" +
                "• Four of a kind\n" +
                "• Five of a kind\n" +
                "• Each individual 1\n" +
                "• Each individual 5\n\n" +
                "<b>Zones:</b>\n" +
                "• Starting zone: 0–65 points\n" +
                "• First red zone: 295–395 points\n" +
                "• Second red zone: 595–695 points"
        }
    }
}