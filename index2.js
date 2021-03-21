// クイズ
const quiz = [
	{
		question: "キングヌーの曲「McDonald Romance」のMVロケ地はどこ？",
		answers: ["日本", "アメリカ", "ドイツ", "イギリス"],
		correct: "アメリカ",
		expla:
			"McDonald RomanceのMVはアメリカのイベントSXSW（サウス・バイ・サウスウエスト）に参加し、ツアーを行ったときに撮影されました。とてもエモい曲です！",
	},
	{
		question: "映画「太陽は動かない」の主題歌に抜擢されたキングヌーの曲は何？",
		answers: ["三文小説", "白日", "あなたは蜃気楼", "泡"],
		correct: "泡",
		expla:
			"「泡」のMVはYou Tubeで視聴することができ、俳優の森山未來が出演しています。曲と森山さんのパフォーマンスがマッチしていて素晴らしいMVです！",
	},
	{
		question: "キングヌーは自らの音楽をなんと呼んでいる？",
		answers: [
			"トーキョー・ニュー・ミクスチャー・スタイル",
			"ジャパン・ニュー・ミクスチャー・スタイル",
			"トーキョー・ニュー・ロック・スタイル",
			"トーキョー・ニュー・ミクスチャー・ロック",
		],
		correct: "トーキョー・ニュー・ミクスチャー・スタイル",
		expla:
			"メンバーそれぞれが多方面の音楽から影響を受けそこから新たな音楽を作り上げたことから、自分達の音楽を「トーキョー・ニュー・ミクスチャー・スタイル」と称しています。",
	},
	{
		question: "メンバーの中で1人だけ年齢が違うのは誰？",
		answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
		correct: "井口理",
		expla:
			"ボーカルの井口理だけ年齢が１つ下ですが、年齢の壁は感じられないほど仲がいいです。",
	},
	{
		question: "キングヌーの改名前の名前は？",
		answers: [
			"おせちピッチャー",
			"Srv.Vinci",
			"タイムワープス",
			"初任給パーティー",
		],
		correct: "Srv.Vinci",
		expla:
			"他の選択肢はSrv.Vinciから改名する際に、実際に改名案として上がったものです（おせちピッチャーと初任給パーティーはネタらしいですw）。",
	},
	{
		question:
			"メンバーの中で「井口理のオールナイトニッポン0」に一番多くゲスト出演したのは誰？",
		answers: ["常田大希", "勢喜遊", "新井和輝", "皆同じ回数出演"],
		correct: "新井和輝",
		expla:
			"ラジオにはメンバー全員参加したことがあります。四人全員でラジオに参加した回もありました。",
	},
	{
		question:
			"常田大希が率いる「millennium parade」に一度も参加していないキングヌーのメンバーは？",
		answers: ["井口理", "勢喜遊", "新井和輝", "全員参加"],
		correct: "全員参加",
		expla:
			"ドラムの勢喜遊とベースの新井和輝は高頻度で参加しています。井口は常田にミレパに誘われた際、自分が参加するとKing Gnuと変わらないと考え自ら断ったそうです。しかしミレパの曲「FAMILIA」でボーカルを務め話題になりました。",
	},
	{
		question: "メンバーの中で同じ大学出身の2人は誰？",
		answers: ["井口と常田", "勢喜と常田", "新井と井口", "勢喜と新井"],
		correct: "井口と常田",
		expla:
			"井口理と常田大希は共に東京藝術大学出身で、井口理は声楽科、常田大希は器楽科チェロ専攻でした。",
	},
	{
		question: "キングヌーの2ndアルバムはどれ？",
		answers: ["Tokyo Rendez-Vous", "CEREMONY", "Sympa", "三文小説/千両役者"],
		correct: "Sympa",
		expla:
			"Tokyo Rendez-Vousは1stアルバム、CEREMONYは3rdアルバムです。ちなみにSympaでおすすめの曲はPlayer Xです！",
	},
	{
		question: "キングヌーのミュージックビデオを制作しているチームはどれ？",
		answers: ["millennium parade", "Daiki Tuneta", "PERIMETRON", "ermhoi"],
		correct: "PERIMETRON",
		expla:
			"PERIMETRONは常田大希が主宰するクリエイティブレーベルです。常田さんはキングヌーのMVの映像制作にも関わっているそうです。",
	},
	{
		question: "井口理は歌舞伎町でぼったくられたことがあるが、その額は？",
		answers: ["10万円", "12万円", "16万円", "20万円"],
		correct: "10万円",
		expla:
			"大人のお店でぼったくられたそうですw当初は16万円請求されたそうですが、交渉により10万円に下げられたそうです。",
	},
	{
		question: "キングヌーの曲「ロウラブ」のMVは誰の家で撮影された？",
		answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
		correct: "常田大希",
		expla:
			"正確には常田大希の祖母の家です。一時期祖母の家で2人暮らしをしていたそうです。",
	},
	{
		question:
			"2018年に米津玄師が「この曲邦楽で今年一番好き。」とツイートしたキングヌーの曲は？",
		answers: ["白日", "Flash!!", "The hole", "Player X"],
		correct: "Player X",
		expla:
			"Player Xは中毒性のあるとてもいい曲です。MVがYou Tubeで公開されているのでぜひ見てください！",
	},
	{
		question: "メンバーの中で一時期、有名人にTwitterでクソリプしてたのは誰？",
		answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
		correct: "井口理",
		expla:
			"井口は一度も会ったことがない有名人に、「聴いてくれ！」とKing Gnuの音源のリンクを送り付ける行為を頻繁にしていました。ちなみにアジカンのゴッチ（後藤正文）にクソリプを送った際はブロックされたそうですw",
	},
	{
		question:
			"キングヌーは2019年にMステ初出演を果たしたが、曲「Slumberland」を披露している際の井口が話題となった。なぜ？",
		answers: [
			"進撃の巨人の「奇行種」のように階段を降りたから",
			"歌ってる時の顔がヤバかったから",
			"衣装を急に破り出したから",
			"掛けていた眼鏡をわざと破壊したから",
		],
		correct: "歌ってる時の顔がヤバかったから",
		expla:
			"爪痕を残すためにやったそうですw何かに取り憑かれたような表情をしてますw「キングヌー 井口 mステ」でググるとその写真が出てきますw",
	},
];

// 正答数による結果
const title = [
	"残念！勉強してもう一度！",
	"あなたはキングヌー見習いです！",
	"あなたはキングヌーエリートです！",
	"あなたはキングヌーマスターです！",
];

// 再チャレンジボタン（最後に表示のため最初は非表示）
// document.getElementById("reChallenge").style.display ="none";

// 出題問題数
const questionNumber = 3;
// 用意している問題数
const quizLength = quiz.length;
let quizIndex = 0;
let problemNumber = 1;
let score = 0;
const explanation = [
	"キングヌークイズは全部で" +
		quizLength +
		"問あり、毎回ランダムで3問出題します!",
	"もう1度遊びたい人は下のボタンをクリック！",
];

// const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//     'スーパーファミコン',
//     'プレイスレーション2',
//     'ニンテンドースイッチ',
//     'ニンテンドーDS'
//     ];
//     const correct = 'ニンテンドーDS';

// console.log(document.getElementById('js-question').textContent);

// $でHTMLのオブジェクトであるとわかりやすくするのが決まり
document.getElementsByClassName("third")[0].style.display = "none";
const $button = document.getElementsByName("js-btn");
const $problemNumber = document.getElementsByTagName("header");
const $correct = document.getElementsByClassName("js-correctAnswers");
const $title = document.getElementsByClassName("title")[0];
let buttonLength = $button.length;

// 整数のランダム生成
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
// クイズ問題をランダムで選択
let question = [];
const random2 = () => {
	min = 0;
	max = quizLength - 1;

	let randomNumber = random(min, max);
	let result = question.indexOf(randomNumber);
	if (result == -1) {
		question.push(randomNumber);
	} else {
		random2();
	}
};
let problemindex = 0;
while (problemindex < questionNumber) {
	random2();
	problemindex++;
}
// console.log(question);

// クイズの問題、選択肢を定義
const setupQuiz = () => {
	// タブのテキスト指定
	$problemNumber[0].textContent = "第" + problemNumber + "問";
	document.title = "キングヌークイズ：第" + problemNumber + "問";
	// console.log($problemNumber.textContent);
	// console.log($problemNumber);
	document.getElementById("js-question").textContent =
		quiz[question[quizIndex]].question;
	$correct[0].textContent = "現在" + score + "問正解";
	let buttonIndex = 0;
	while (buttonIndex < buttonLength) {
		$button[buttonIndex].textContent =
			quiz[question[quizIndex]].answers[buttonIndex];
		buttonIndex++;
	}
};

setupQuiz();

// クリックイベント
const clickHandler = (e) => {
	if (quiz[question[quizIndex]].correct === e.target.textContent) {
		window.alert("正解！\n" + quiz[question[quizIndex]].expla);
		score++;
	} else {
		window.alert(
			"不正解！正解は「" +
				quiz[question[quizIndex]].correct +
				"」です。\n" +
				quiz[question[quizIndex]].expla
		);
	}
	// scrollTo(0, 0);
	window.scrollTo({
		top: 0,
		behavior: "auto",
	});
	quizIndex++;
	problemNumber++;

	if (quizIndex < questionNumber) {
		setupQuiz();
		// console.log(questionNumber2);
	} else {
		// 結果発表
		document.title = "キングヌークイズ";
		document.getElementsByClassName("second")[0].style.display = "none";
		document.getElementsByClassName("third")[0].style.display = "block";
		document.getElementById("link").href = "index3.css";
		// $problemNumber[1].textContent = "結果発表";
		// document.getElementById("js-question").remove();
		// document.getElementById("js-items").remove();
		$correct[1].textContent = questionNumber + "問中" + score + "問正解！";
		$title.textContent = title[score];
		if (score == 1) {
			$title.style.color = "#C47022";
		} else if (score == 2) {
			$title.style.color = "silver";
		} else if (score == 3) {
			$title.style.color = "gold";
		}
		document.getElementsByClassName("explanation")[0].textContent =
			explanation[0];
		document.getElementsByClassName("explanation")[1].textContent =
			explanation[1];
		// 再チャレンジボタン表示
		// document.getElementById("reChallenge").style.display ="block"
	}
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener("click", (e) => {
		clickHandler(e);
	});
	handlerIndex++;
}
