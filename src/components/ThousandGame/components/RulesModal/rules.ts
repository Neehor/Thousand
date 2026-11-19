export const rules = {
    ru: {
        goal: {
            head: "Цель игры",
            text: "Первым набрать ровно 1000 очков, используя 5 игральных кубиков и специальную систему подсчета комбинаций. Игроки бросают кубики по очереди, откладывают очки и продолжают бросок (при выпадении игровой комбинации), пока не решат сохранить очки или пока не выпадет «пустой» ход (при броске кубиков игровой комбинации не случилось)."
        },
        comboScore: {
            head: "Комбинации и очки",
            text:"<b>Три единицы:</b> 100 очков.\n" +
                "Четыре единицы: 400 очков.\n" +
                "Пять единиц автоматически победа!\n" +
                "Одиночные кубики: 1 = 10 очков, 5 = 5 очков (остальные цифры по отдельности очков не приносят).\n" +
                "Три одинаковых кубика: номинал умножается на 10 (три двойки — 20, три тройки — 30, три четверки — 40, три пятерки — 50, три шестерки — 60).\n" +
                "Четыре одинаковых кубика: номинал умножается на 40.\n" +
                "Пять одинаковых кубиков: номинал умножается на 100."
        },
        gamePlay: {
            head: "Ход игры",
            text: "Начало хода: игрок бросает все 5 кубиков.\n" +
                "Отбор кубиков: нужно отложить хотя бы один результативный кубик (либо 1, либо 5) или игровую комбинацию.\n" +
                "Переброс: оставшиеся кубики можно бросить повторно, чтобы добрать очки.\n" +
                "\"Пустые\" броски: если в каком-то броске не выпало ни одного результативного кубика, очки за этот ход сгорают. Когда за один ход у игрока задействованы все 5 кубиков (например, выпали три пятерки и две единицы), он может сделать еще один полный бросок всеми пятью кубиками."
        },
        restrictions: {
            head: "Особые правила и ограничения",
            text: "Вход в игру: нужно набрать минимум 65 очков за один подход, чтобы открыть счет.\n" +
                "Игрок, набравший больше 295 очков, входит в первую красную зону. У него есть три попытки набрать оставшиеся очки до 395 очков (или меньше 295). Если он не успевает, с него списываются 50 очков. Так же и для промежутка между 595 и 695 (вторая красная зона).\n" +
                "Когда один игрок обгоняет другого по очкам, с того кого обогнали списываются 50 очков.Если у двух игроков одинаковые очки, то обогновшим считается тот, кто первым сохранит очки.\n" +
                "Выбросив больше 1000 игрок сразу падает на 50 очков и передаёт ход."
        }
    },
    en: {
        goal: {
            head: "Game Goal",
            text: "To become the first player to score exactly 1000 points using 5 dice and a special combination scoring system. Players take turns rolling the dice, setting aside scoring dice and continuing to roll (when a scoring combination is rolled) until they decide to bank their points or roll a \"bust\" (when no scoring combination is rolled)."
        },
        comboScore: {
            head: "Combinations and Scoring",
            text: "Three ones (aces): 100 points.\n" +
                "Four ones: 400 points.\n" +
                "Five ones: automatic victory!\n" +
                "Single dice: 1 = 10 points, 5 = 5 points (other individual numbers score no points).\n" +
                "Three of a kind: the face value is multiplied by 10 (three twos = 20, three threes = 30, three fours = 40, three fives = 50, three sixes = 60).\n" +
                "Four of a kind: the face value is multiplied by 40.\n" +
                "Five of a kind: the face value is multiplied by 100."
        },
        gamePlay: {
            head: "Gameplay",
            text: "Starting a turn: the player rolls all 5 dice.\n" +
                "Selecting dice: at least one scoring die (either a 1 or a 5) or a scoring combination must be set aside.\n" +
                "Rerolling: the remaining dice can be rolled again to score additional points.\n" +
                "\"Bust\" rolls: if a roll produces no scoring dice or combinations, all points accumulated during that turn are lost. When all 5 dice have been used during a single turn (for example, three fives and two ones are rolled), the player may roll all five dice again."
        },
        restrictions: {
            head: "Special Rules and Restrictions",
            text: "Entering the game: a player must score at least 65 points in a single turn to open their score.\n" +
                "A player who scores more than 295 points enters the first red zone. They have three attempts to reach 395 points (or drop below 295). If they fail, 50 points are deducted. The same rule applies to the second red zone, between 595 and 695 points.\n" +
                "When one player overtakes another in points, the player who was overtaken loses 50 points. If both players have the same score, the player who banks their points first is considered to have overtaken the other.\n" +
                "If a player scores more than 1000 points, they immediately lose 50 points and pass their turn."
        }
    }
}