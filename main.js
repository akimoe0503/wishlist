// モックの、本来は動的に作る部分をコメントアウトしておく

// Addボタンの処理

// Addボタンが押されたら
// 1,入力ボタンのチェック
// 空文字ならなにもしない
// なにか入力されてたら、
// 2,ulの中にliとして表示する
// 表示するliには、右側にdeliteボタンが表示されていたいるようにする
// 3,追加されるliはどんどん下に追加されていく
// 4,入力欄を空にする

// Addボタン要素の取得
let addBtn = document.querySelector('#btn');

// Addボタンが押されたときのイベントを取得(addEventListener)
// イベントを察知したい要素.addEventListener(察知したいイベント名(文字列),function(){イベントが発生したら行いたい処理}
addBtn.addEventListener('click',function(){

// 1.入力文字のチェック
// 入力文字の取得
let input_text = document.querySelector('#input').value;

// input_textが空じゃなかったら、処理を行う
if(input_text != ''){
	// 2,ulの中にliとして表示する
	// 親要素のulを変数に取得(HTMLのulのタグ名を見る)
	let todo_list = document.querySelector('.todo-list');

	// 追加予定のliタグを生成
	let li = document.createElement('li');
	// li <li></li>が入っている
	// liのclassにlistを追加
	li.classList.add('list');
	// li <li class="list"><li>が入っている

	// 生成したliタグの文字を入力された文字(input_text)にする(代入する)
	li.textContent = input_text;
	// li <li class='list'>入力された文字</li>が入っている
	console.log(li);

	let icon1 = document.createElement('i');
	icon1.classList.add('fas');
	icon1.classList.add('fa-trash-alt');
	icon1.classList.add('fa-lg');

	let icon2 = document.createElement('i');
	icon2.classList.add('far');
	icon2.classList.add('fa-check-square');
	icon2.classList.add('fa-lg');

	console.log (icon1);

	li.appendChild(icon2);
	li.appendChild(icon1);

// doneリスト

	icon2.addEventListener('click',function(){

	let done_list = document.querySelector('#Done');

	// // 追加予定のliタグを生成
	let done_li = document.createElement('li');
	// // li <li></li>が入っている
	// // liのclassにlistを追加
	done_li.classList.add('list');
	// // li <li class="list"><li>が入っている

	// // 生成したliタグの文字を入力された文字(input_text)にする(代入する)
	// done_li.textContent = li.textContent;
	// // li <li class='list'>入力された文字</li>が入っている
	// console.log(done_li);

	done_list.appendChild(li);

});

	// // liの中にDeleteボタンとなるdivタグを追加
	// // Deleteボタン用のdivタグを生成
	// let div_delete = document.createElement('div');
	// // div_deleteには <div></div> が入っている

	// // divにクラス名deleteを指定
	// div_delete.classList.add('delete');
	// // div_deleteには<div class='delete'></div> が入っている

	// // 表示の文字は「Delete」を設定
	// div_delete.textContent = 'Delete';
	// // div_deleteには<div class='delete'>Delete</div> が入っている

	//Deleteボタンの処理
	// 押された時の部分のリストが消える
	// 押されたらDeleteボタンの親要素のli
	icon1.addEventListener('click',function(){
		// this Deleteボタン(disタグ)
		// this.parentElement Deleteを含んだliタグ
		let hantei = confirm('Are you sure?');
		// OKが押されたら削除する
		if (hantei === true){
			this.parentElement.remove();
		}
	});


	// 生成したliタグを親要素のulタグに追加(appendChildを使うことによりどんどん下に追加される)
	todo_list.appendChild(li);

	//　4,入力欄を空にする
	document.querySelector('#input').value = '';

}

});




