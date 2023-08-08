use std::io;
fn main() {
    println!("猜数!");
    println!("猜一个数!");
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("无法读取");
    println!("猜到的数字是{}", guess)
}
