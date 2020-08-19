use wasm_bindgen::prelude::*;

extern crate num_bigint as bigint;
extern crate num_traits;

use bigint::BigUint;
use num_traits::{Zero, One};

// #[wasm_bindgen]
// pub fn say(s: &str) -> String {
//   println!("The Rust function say() received {}", s);
//   let r = String::from("hello ");
//   return r + s;
// }

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
  let mut memo = (0, 1);
    match n {
        0 | 1 => n,
        _ => {
            for _ in 2..=n {
                memo = (memo.1, memo.0 + memo.1)
            }
            memo.1
        }
    }
}

#[wasm_bindgen]
pub fn is_prime(x: i32) -> String {
  let num_bool = (2..x).all(|i| x % i != 0);
  if num_bool {
    return String::from("True");
  } else {
    return String::from("False");
  }
  
}