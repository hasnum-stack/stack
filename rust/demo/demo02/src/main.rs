fn main() {
    println!("Hello,  world!");
    println!("Hello, 123world1!");
    let a = test1();
    println!("Hello, {}!", a);
    println!("Hello, {}!", back_string('4'));
}
fn test1() -> char {
    return '1';
}
fn back_int() -> i32 {
    return 1;
}

fn back_string(a: char) -> String {
    // 返回一个字符串+456
    let mut s = String::from("123");
    s.push(a);
    return s;
}
