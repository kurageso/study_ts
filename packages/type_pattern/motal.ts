// TypeScriptでも論理プログラミングをやってみたい

// 事実1： ソクラテスは人間である
type Human = "socrates";

// 事実2: 人間は死ぬ
type Motal<T> = T extends Human ? true : false;

// 問題：　ソクラテスは死ぬか？
type Q_1 = Motal<"socrates">; // true
const is_socrates_motal: Motal<"socrates"> = true; // 最初から型が確定しているのでエラーにならないように代入するだけ

// 問題：　hogehogeは死ぬか？
type Q_2 = Motal<"hogehoge">; // false
const is_hogehoge_motal: Motal<"hogehoge"> = false; // 最初から型が確定しているのでエラーにならないように代入するだけ

// 静的型付言語での型レベルでのプログラミングなので実行する前から答えがわかっている

// 通常の？プログラミング例
const human = ["socrates"];

const motal = (target: string) => human.includes(target);

motal("socrates"); // boolean -> 実行するとtrueだとわかる
motal("hogehoge"); // boolean -> 実行するとfalseだとわかる
