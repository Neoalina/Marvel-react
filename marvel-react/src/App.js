import React from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import  './components/images/batman.jpg';

const cards = [
  {title:"Бэтмен", url: "batman.jpg",  universe: "DC Comics", alter_ego: "Брюс Уэйн", occupation: "борец с преступностью, филантроп, миллиардер", friends: "Робин, Бэтгерл", power: "интеллект, обширные познания, знания боевых искусств, ловкость", detail: "по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом."},
  {title: "Супермен", url: "../public/images/superman.jpg",  universe: "DC Comics", alter_ego: "Кларк Кент", occupation: "борец за справедливость", friends: "собака Крипто", power: "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм", detail: "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."},
  {title: "Железный человек", url: "",  universe: "Marvel Comics", alter_ego: "Тони Старк", occupation: "гений, миллиардер, плейбой, филантроп", friends: "Мстители", power: "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы", detail: "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже."},
  {title: "Спайдер-мен/Человек-паук", url: "",  universe: "Marvel Comics", alter_ego: "Питер Паркер", occupation: "борец за справедливость, студент, фотограф", friends: "Мстители, Фантастическая четверка, Люди Икс", power: "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины", detail: "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:) Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность». Кстати, не все суперсилы у Питера появились за счет мутации: парень самостоятельно взломал технологию Тони Старка, после чего заслужил его признание."},
  {title: "Капитан Америка", url: "",  universe: "Marvel Comics", alter_ego: "Стивен Роджерс", occupation: "супер-солдат", friends: "Мстители", power: "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя", detail: "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"},
  {title: "Тор", url: "",  universe: "Marvel Comics", alter_ego: "нет; полное имя — Тор Одинсон", occupation: "борец за справедливость, скандинавский бог", friends: "Мстители", power: "все, что может бог, плюс молот Мьелнир", detail: "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии."}
];

function App() {
  return (
    <div className="App">
      {cards.map((card) =>
      <Card title={card.title} url={card.url}  universe={card.universe} alter_ego={card.alter_ego} occupation={card.occupation} friends={card.friends} power={card.power} detail={card.detail} /> 
      )}
    </div>
  );
}

export default App;