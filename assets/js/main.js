// このファイルに処理を記述する
let h1 = document.querySelector('h1');
h1.style.fontFamily = 'cursive';
// 1.ボタン要素を取得
let btn = document.getElementById('btn');
// 2.ボタンにクリックイベントを追加する (3-15は全てこのイベント内)
btn.addEventListener('click', function () {
    // 3.ユーザーが入力した要素を取得
    let input = document.getElementById('input');
    
    // 4.上で取得した要素の入力された内容 (value) を取得し、変数に代入
    let task = input.value;
    if (task !== '') {
        //5. <li>要素を作成
        let text = document.createElement('li');
        // 6.<li>にクラス（list）を追加
        text.classList.add = ('list');
        // 7/<li>にユーザーが入力した内容(4)を入れる
        text.textContent = input.value;
        // console.log(text);
        // 8.<ul>要素を取得 (todo-list)
        let todolist = document.getElementsByClassName('todo-list');
        // 9.4-6で作成した<li>を、7で取得した<ul>の子要素に入れる
        todolist[0].appendChild(text);
        // console.log(todolist[0]);
        // 10.inputの中に入力された文字を消去する（値を''にする）
        input.value = '';
        // 11.Deleteボタンを作成（機能としてはボタンですが、<div>要素を使います）
        let deleteBtn = document.createElement('i');
        console.log(deleteBtn);
        // 12.Deleteボタンのコンテンツ (文字) を指定
        // deleteBtn.textContent = 'Delete';
        // 13.Deleteボタンにクラス (delete) を追加
        deleteBtn.classList.add('fa-solid');
        deleteBtn.classList.add('fa-delete-left');
        // 14.10-13で作成したDeleteボタンを、4-7で作成した<li>の子要素に入れる
        text.appendChild(deleteBtn);
        // Deleteボタンにクリックイベントを追加 (15)
        deleteBtn.addEventListener('click', function () {
            let res = alert("達成おめでとうございます！");
            // クリックした要素 (this) を親ごと削除
            this.parentElement.remove();
        })
    }
})