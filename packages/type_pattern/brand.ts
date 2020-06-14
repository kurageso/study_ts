// プリミティブ型をそのまま使用しない
type Name = string & { _NameBrand: never };

const fn = (name: Name) => {};

// Name型として宣言する
const name_a = "name a" as Name;

// string型として宣言する
const name_b = "name b";

fn(name_a);

// fn(name_b); // 型が異なるためエラー
