use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// pub fn say(s: &str) -> String {
//   println!("The Rust function say() received {}", s);
//   let r = String::from("hello ");
//   return r + s;
// }

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
  match n {
      0 => 1,
      1 => 1,
      _ => fibonacci(n - 1) + fibonacci(n - 2),
  }
}

#[wasm_bindgen]
pub fn is_prime(x: i32) -> String {
  let num_bool = (2..x).all(|i| x % i != 0);
  if num_bool {
    return String::from("true");
  } else {
    return String::from("false");
  }
  
}